module.exports = {
    title: "Packagaya",
    description: "The package manager",
    themeConfig: {
        sidebar: [
            "/",
            {
                title: "Packages & Types",
                sidebarDepth: 1,
                children: [
                    "/packages and types/package-types",
                    "/packages and types/adapters",
                ],
            },
            {
                title: "Guide",
                sidebarDepth: 1,
                children: [
                    "/guide/installation",
                    "/guide/getting-started",
                    "/guide/synchronizing-packages",
                ],
            },
            {
                title: "Adapters",
                sidebarDepth: 1,
                children: ["/adapters/TypeScript", "/adapters/VSCode"],
            },
            "/commands",
        ],
    },
};
