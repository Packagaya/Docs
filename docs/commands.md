# Commands

## init

```
packagaya init
```

Initializes Packagaya in the current working directory.

## sync info

```
packagaya sync info [--feature-flags]
```

The `sync info` command synchronizes the current project. In this step all configurations files will be read and the differences are shown in an overview.

The passed features flags will be used to execute different features for the current code base.

## sync execute

```
packagaya sync execute [--feature-flags]
```

The `sync execute` command synchronizes the current project. In this step all configurations files will be read and adjusted according to the informations from the `sync info` command.

The passed features flags will be used to execute different features for the current code base.
