import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
    {
        input: "build/index.js",
        output: [
            {
                dir: "../../dist/api-connector",
                format: "esm",
                entryFileNames: "index.mjs",
            },
            {
                dir: "../../dist/api-connector",
                format: "cjs",
                entryFileNames: "index.cjs",
            },
        ],
        treeshake: true,
        plugins: [
            nodeResolve({
                resolveOnly: [/^@guiurm\//],
            }),
            /*
             */
        ],
    },
    {
        input: "build/index.d.ts",
        output: [
            //{ file: "../../dist/index.d.ts", format: "es" },
            { file: "../../dist/api-connector/index.d.ts", format: "es" },
        ],
        plugins: [dts()],
    },
]);
