# Package types

Table of contents:
[[TOC]]

# Packages and the package types

Packagaya manages two types of packages:

1. Apps (Applications)
2. Libs (Libraries / Frameworks)

## Apps (Applications)

Applications are programs which can be executed by a CLI.

For example:

- Webserver
- custom scripts
- CLI programs

::: danger ATTENTION
Applications should never link to another Application!

You should use a library if you want to share informations between these packages!
:::

## Libs (Libraries / Frameworks)

Libraries are packages which contain reusable definitions for applications and other libraries.

For example:

- Entities
- Dependency Injection definitions
- Database connection creation

Libraries can always link to another library!

::: warning
You need to be aware of circular dependencies!
Create another library if you have this situation!
:::
