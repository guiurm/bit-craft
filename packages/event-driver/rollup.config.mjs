import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
    {
        input: "build/index.js",
        output: [
            {
                dir: "dist",
                format: "esm",
                entryFileNames: "index.mjs",
            },
            {
                dir: "dist",
                format: "cjs",
                entryFileNames: "index.cjs",
            },
        ],
        plugins: [nodeResolve()],
        // external: ["@guiurm/termify", "@guiurm/askly"],
        // plugins: [dts()],
    },
    {
        input: "build/index.d.ts",
        output: [
            //{ file: "../../dist/index.d.ts", format: "es" },
            { file: "dist/index.d.ts", format: "es" },
        ],
        plugins: [dts()],
    },
]);
