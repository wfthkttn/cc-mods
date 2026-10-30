# Layers

Three mods are one stack, each on the one under it. A lower layer knows nothing of a higher one.

| Layer | In one line | Owns | Never |
|---|---|---|---|
| cc-providers | The provider boundary | Provider facts: models, prices, pools, quota, spend limits, tiers of what can run. Running a harness and translating what is asked of it. Normalized usage and the cost it recorded for each request. Token arithmetic. | Knowing what an agent is. Deciding anything: no order among providers, no retries, no pausing, no permission policy. |
| cc-agents | Runs agents, holds agents | Every agent, started here or by Claude: identity, lifecycle, state, working folder, answers, attempts and retries, what it spent per model, whether it is stalled. Where it runs: placing a model on a provider. Which kinds and profiles exist. The conversation as a thing that can be counted and held. | Pricing, or any rule about a provider. Knowing what a job, a report or a person's ask is. |
| cc-crew | Manages agents | Jobs, prompts, which models a job uses and how it prefers them, reports, diffs, the person's asks, and the views. It decides; it tells agents what to do and reads what agents and providers answer. | Counting, pricing or tracking an agent. Hooking a turn or a spawn. Keeping an agent's state of its own beyond a cache of what agents last said. |

## Where new code goes

New state, a new hook, a new counter or a new rule goes in the lowest layer that can own it. Weigh every layer by the table, the lowest first, and name why each lower one can't hold it. A new record kept above the layer that owns its subject is the failure this file exists to stop.

A review of the stack has a pass over this table: for each file, what it owns, and whether that is this layer's.

## Enforced

`layers.json` lists what each mod may hook and which lower-layer calls it may make. Each mod's `node-tests/layer.check.ts` reads its hooks and calls off its source and fails on anything not listed. Widening a list is a change to this contract, so it is a decision of its own, not part of a feature.

The check sees hooks and calls. It cannot see a rule copied into local code, which is what the table and the review pass are for.
