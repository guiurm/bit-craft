import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
    {
        input: "build/index.js",
        output: [
            {
                dir: "../../dist/iterables",
                format: "esm",
                entryFileNames: "index.mjs",
            },
            {
                dir: "../../dist/iterables",
                format: "cjs",
                entryFileNames: "index.cjs",
            },
        ],
        plugins: [nodeResolve()],
    },
    {
        input: "build/index.d.ts",
        output: [{ file: "../../dist/iterables/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
]);
