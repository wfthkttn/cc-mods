# cc-mods

The `wfthkttn` marketplace for Claude Code mods.

Provided as is.

## Plugins

- [cc-sidebar](https://github.com/wfthkttn/cc-sidebar): a sidebar other plugins fill with icons, badges, switches and drawers.
- [cc-providers](https://github.com/wfthkttn/cc-providers): model providers in one place for other mods: models, prices, quota, headless runs and per-session spending limits, and a launcher for sessions on other providers.
- [cc-bus](https://github.com/wfthkttn/cc-bus): optional wiring between mods: a mod asks a topic and every loaded mod that knows it answers.
- [cc-agents](https://github.com/wfthkttn/cc-agents): headless agent runs on any provider cc-providers knows, kept across reloads.
- [cc-cache](https://github.com/wfthkttn/cc-cache): the prompt cache countdown in the sidebar, a keep-alive for large idle sessions, and compaction from the sidebar or Telegram.
- [cc-conversation](https://github.com/wfthkttn/cc-conversation): the session's messages, questions and answers for other mods.
- [cc-crew](https://github.com/wfthkttn/cc-crew): reviews by other providers' models, with restricted read paths, and a sidebar tab for reviews, agents, spending limits and quota.

## Requirements

See each plugin's README for its Claude Code and platform requirements. Sidebar content needs fullscreen rendering.

## Install

At a Claude Code prompt, replace `<name>` with a plugin listed above:

```
/plugin install <name> --marketplace wfthkttn/cc-mods
```

Answer `y` to add the marketplace, then pick a scope. Dependencies install with the plugin.

[cc-secrets](https://github.com/wfthkttn/cc-secrets) supplies secrets to commands and masks them in tool results.
[cc-courier](https://github.com/wfthkttn/courier) carries the session's conversation to Telegram. They run daemons and
install with their own scripts; follow their READMEs.

## Licence

MIT, see [LICENSE](LICENSE).
