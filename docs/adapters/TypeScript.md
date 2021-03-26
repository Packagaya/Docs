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

Define the adapter as dependency in your `packagaya.json` file.

```json
{
    "adapters": ["@packagaya/typescript-adapter"]
}
```

## Templates

| Name                                    | Status      |
| :-------------------------------------- | :---------- |
| [ts:create-package](#ts-create-package) | implemented |

### ts:create-package

Helps you with creating new Node.JS packages with a SPDX compliant license.

## Feature flags

| Name                            | Status      | Fixable |
| :------------------------------ | :---------- | :------ |
| [sync-ts-deps](#sync-ts-deps)   | implemented | Yes     |
| [sync-ts-paths](#sync-ts-paths) | implemented | Yes     |

### sync-ts-deps

Synchronizes the dependencies from the `package.json` file with the dependencies from the code.

### sync-ts-paths

Synchronizes the paths in the `tsconfig.json` file with the used imports from the code.
