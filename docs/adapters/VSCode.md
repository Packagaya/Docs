# Visual Studio Code

[[TOC]]

## Installing the adapter

Using npm:

```
npm install -D @packagaya/vscode-adapter
```

Using yarn:

```
yarn add -D @packagaya/vscode-adapter
```

## Using the adapter

Define the adapter as dependency in your `packagaya.json` file.

```json
{
    "adapters": ["@packagaya/vscode-adapter"]
}
```

## Templates

This adapter does not provide any templates.

## Feature flags

| Name                            | Status      | Fixable |
| :------------------------------ | :---------- | :------ |
| [sync-vscode-workspaces](#sync-vscode-workspaces)   | implemented | Yes     |

### sync-vscode-workspaces

Synchronizes the workspace folders with all managed packages and adds missing entries. Additional entries will be ignored.

#### Configuration

The "sync-vscode-workspaces" feature flags requires the following configuration to be present in your Packagaya configuration file:

```js
[
    "sync-vscode-workspaces",
    {
        "workspaceFile": "./path/to/my-vscode-workspace-file.code-workspace"
    }
]
```
