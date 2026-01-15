---
description: Display plugin information and component list
allowed-tools: Read
---

Display information about the test-plugin.

Read the plugin manifest: @${CLAUDE_PLUGIN_ROOT}/.claude-plugin/plugin.json

Present the following information:
1. Plugin name and version
2. Description
3. Available components:
   - Skills: test-guide (test writing guidance)
   - Commands: /hello, /info
   - Agents: plugin-helper
   - Hooks: SessionStart welcome message

Format the output in a clear, organized manner.
