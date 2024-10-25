import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es", "umd"],
            name: "bit-craft",
            fileName: "main",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    Vue: "vue",
                },
            },
        },
    },
    plugins: [vue(), dts({ tsconfigPath: "./tsconfig.app.json", rollupTypes: true }), vueJsx()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
