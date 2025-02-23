import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
    {
        input: "build/index.d.ts",
        output: [{ file: "../../dist/utility-types/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
    {
        input: "build/index.js",
        output: [
            { file: "../../dist/utility-types/index.mjs", format: "es" },
            { file: "../../dist/utility-types/index.cjs", format: "cjs" },
        ],
    },
]);
