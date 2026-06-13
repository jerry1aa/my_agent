# AGENTS

## Project Rules

- Install Node.js packages only for this project. Use local project dependencies in `package.json`; do not use global npm installs.
- Use `npm.cmd install --save-dev <package>` for development tools.
- Use `npm.cmd install <package>` for runtime dependencies.
- Run package commands through `npm.cmd run <script>` on Windows.

## Verification

- Compile TypeScript: `npm.cmd run compile`
- Lint TypeScript: `npm.cmd run lint`
- Check formatting: `npm.cmd run format:check`
- Format files: `npm.cmd run format`
