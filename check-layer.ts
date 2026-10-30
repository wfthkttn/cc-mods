import { readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'

type Layer = { hooks: string[]; calls: Record<string, string[]> }

const HOOK = /\bon\(\s*['"]([\w.*-]+)['"]/g
const NOUN = /(?:\$|\bbuilt)\.(providers|agents|agent)\.(\w+)/g

/** Read off the source: `claude plugin validate` cuts its list of calls short, and what is cut would pass unseen. */
function readOff(repo: string): { hooks: string[]; calls: string[] } {
  const dir = join(repo, 'hooks')
  const source = readdirSync(dir)
    .filter(name => name.endsWith('.ts'))
    .map(name => readFileSync(join(dir, name), 'utf8'))
    .join('\n')
  const hooks = [...source.matchAll(HOOK)].map(m => m[1]!)
  if (hooks.length === 0) throw new Error(`layer check: no hooks read off ${dir}`)
  return { hooks, calls: [...source.matchAll(NOUN)].map(m => `$.${m[1]}.${m[2]}`) }
}

/** Fails on any hook or lower-layer call the mod's entry in layers.json does not list. */
export function checkLayer(repo: string): void {
  const mod = basename(repo)
  const layers = JSON.parse(readFileSync(join(import.meta.dirname, 'layers.json'), 'utf8')) as Record<string, Layer>
  const layer = layers[mod]
  if (layer === undefined) throw new Error(`layer check: ${mod} has no entry in layers.json`)
  const { hooks, calls } = readOff(repo)
  test(`${mod} hooks only what its layer owns`, () => {
    assert.deepEqual([...new Set(hooks)].filter(h => !layer.hooks.includes(h)), [], 'hooks outside layers.json; see LAYERS.md')
  })
  test(`${mod} calls lower layers only as its layer may`, () => {
    const outside = [...new Set(calls)].filter(call =>
      Object.entries(layer.calls).some(([noun, names]) => call.startsWith(`${noun}.`) && !names.includes(call.slice(noun.length + 1))),
    )
    assert.deepEqual(outside, [], 'calls outside layers.json; see LAYERS.md')
  })
}
