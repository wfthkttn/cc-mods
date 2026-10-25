# cc-mods

The `wfthkttn` marketplace for Claude Code mods.

Provided as is.

## Plugins

- [cc-sidebar](https://github.com/wfthkttn/cc-sidebar): a sidebar other plugins fill with icons, badges, switches and drawers.
- [cc-quota](https://github.com/wfthkttn/cc-quota): Claude, Codex and Antigravity usage limits in the sidebar.
- [cc-conversation](https://github.com/wfthkttn/cc-conversation): the session's messages, questions and answers for other mods.
- [cc-crew](https://github.com/wfthkttn/cc-crew): reviews by Codex, Antigravity and Claude, with restricted read paths.

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
