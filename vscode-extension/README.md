# AI Context Master - VS Code Extension

> Automatically apply AI Context Master to any workspace

## Features

- ✅ **Auto-inject CLAUDE.md** - Automatically apply context when opening a folder
- ✅ **Multiple Templates** - Choose from Minimal, Standard, or Full context
- ✅ **Configurable** - Customize which files to inject and exclude patterns
- ✅ **Commands** - Quick access via Command Palette

## Installation

### From VSIX (Recommended for testing)

1. Download the latest `.vsix` file from Releases
2. Run: `code --install-extension ai-context-master-1.0.0.vsix`

### From Source

```bash
cd vscode-extension
npm install
npm run compile
# Press F5 to debug
```

### Publish to Open VSX

```bash
npm install -g @vscode/vsce
vsce package
vsce publish --provider openvsx
```

## Usage

### Auto-Inject (Default)

When enabled, opening any folder will automatically create `CLAUDE.md` if it doesn't exist.

### Manual Apply

1. Open a workspace folder
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type `AI Context Master: Apply to Workspace`
4. Select template (Minimal/Standard/Full)

### Quick Setup

1. Press `Ctrl+Shift+P`
2. Type `AI Context Master: Quick Setup`
3. Choose options

## Configuration

Go to `Settings > AI Context Master`:

| Setting | Default | Description |
|---------|---------|-------------|
| `aiContextMaster.enabled` | `true` | Enable/disable extension |
| `aiContextMaster.autoInject` | `true` | Auto-inject on folder open |
| `aiContextMaster.files` | `["CLAUDE.md"]` | Files to inject |
| `aiContextMaster.excludePatterns` | `["**/node_modules/**", ...]` | Folders to skip |

## Commands

| Command | Description |
|---------|-------------|
| `ai-context-master.apply` | Apply template to workspace |
| `ai-context-master.setup` | Quick setup wizard |
| `ai-context-master.openDocs` | Open documentation |

## License

MIT
