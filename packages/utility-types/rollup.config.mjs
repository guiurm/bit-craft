import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
    {
        input: "build/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
    {
        input: "build/index.js",
        output: [
            { file: "dist/index.mjs", format: "es" },
            { file: "dist/index.cjs", format: "cjs" },
        ],
    },
]);
