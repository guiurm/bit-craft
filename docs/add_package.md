# Create a New Package with

This document provides a _step-by-step_ guide to **add a new package** to our project using **npm** and **workspaces**. It will then explain how to configure and verify the package to ensure that it integrates correctly with the existing project.

## Objective

The objective of this document is to provide a clear and concise guide to adding new packages to our project, ensuring that best practices are followed and errors are minimized.

## Prerequisites

- Have **npm** and workspaces installed in the project.
- Have write permissions on the project directory.

## Content

In this document, the following topics will be covered:

- Initial configuration of the package
- Verification of the package and workspace
- Integration with the existing project

## Command line

Run the following command to create a new package in a workspace, automatically setting its scope to @guiurm:

```bash
npm init -y -w packages/[package_name] --scope @guiurm
```

Breakdown of the Command:

- npm init -y: Initializes a new package with default values (skipping prompts).
- -w packages/[package_name]: Specifies that this package should be created in the packages/[package_name] directory.
- --scope @guiurm: Assigns tguiurm @guiurm scope to the package name. The resulting package name wguiurml be @guiurm/[package_name].

### Verify the Package and Workspace

After running the command, the following will happen:

    A new directory called [package_name] will be created under the packages directory.
    Inside packages/[package_name], you’ll find a package.json file with the name set to @guiurm/[package_name].
    The package.json will have basic configuration, like:

```json
// <root_diretory>/packages/[package_name]/package.json
{
  "name": "@guiurm/[package_name]",
  "version": "1.0.0",
  "private": true
  ...
}
```

### Add the New Workspace to the Main Workspace Configuration

Ensure your root package.json (in the guiurm project) has the workspaces configuration. If it doesn't already have it, you can add it manually:

```json
// <root_diretory>/package.json
{
    "name": "guiurm",
    "private": true,
    "workspaces": [
        "packages/[package_name]" // or write "packages/*" instead
    ]
}
```

The _`packages/*`_ pattern ensures that all packages inside the packages folder are included as workspaces.
