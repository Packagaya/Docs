# Adapters

Adapters are plugins for Packagaya which handle a specific type of source code files.

## Official adapters

| Language                             | Status  |
| :----------------------------------- | :------ |
| [TypeScript](../adapters/TypeScript) | planned |

## Community adapters

| Language | Status |
| :------- | :----- |

### Using adapters

You need to configure the adapters in your `.packagaya.json`:

```json
{
    "adapters": [
        "@packagaya/example-adapter"
    ]
}
```

The adapters will then read the configuration files of your project and provide different features which you can use for the [sync info](../commands.md#sync-info) and [sync execute](../commands.md#sync-execute) command.
