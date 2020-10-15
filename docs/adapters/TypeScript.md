# TypeScript

[[TOC]]

## Installing the adapter

Using npm:

```
npm install -D @packagaya/typescript-adapter
```

Using yarn:

```
yarn add -D @packagaya/typescript-adapter
```

## Using the adapter

Define the adapter as dependency in your `.packagaya.json` file.

```json
{
    "adapters": [
        "@packagaya/typescript-adapter"
    ]
}
```

## Feature flags

|              Name               | Status  | Fixable |
| :-----------------------------: | :-----: | :-----: |
|  [sync-ts-deps](#sync-ts-deps)  | planned |   Yes   |
| [sync-ts-paths](#sync-ts-paths) | planned |   Yes   |

### sync-ts-deps

Synchronizes the dependencies from the `package.json` file with the dependencies from the code.

### sync-ts-paths

Synchronizes the paths in the `tsconfig.json` file with the used imports from the code.
