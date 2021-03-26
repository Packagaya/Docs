# Synchronizing packages

Synchronizing package informations is a fundamental feature of Packagaya.

Now you may ask yourself what kind of stuff Packagaya could synchronize?

That is easy to explain:

1. Packagaya could read the AST (abstract syntax tree) from the source code, gather all used dependencies and check if they are defined in the package configuration file.
2. Packagaya could read the AST and check if the imported packages in the TypeScript configuration file are up to date.

<!-- ::: tip
If you do not have already initialized your repository, then now is a good time to [initialize it](./getting-started.md).
::: -->

## Showing the issues

Packagaya can always show you the differences between the configuration files and the actual code.

It also helps you with preventing forbidden imports (from application to application) and circular dependencies.

Using TypeScript?

Then Packagaya can also show the issues in the `tsconfig.json` file.

## Fixing the issues

Packagaya can also help you with fixing some of those issues.

::: danger ATTENTION
It cannot fix circular dependencies or "forbidden imports".
:::
