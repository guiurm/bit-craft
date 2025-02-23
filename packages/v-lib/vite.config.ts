import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'umd'],
            name: 'multi-lang-router',
            fileName: 'main'
        },
        rollupOptions: {
            external: ['vue', 'vue-router'], // Excluimos Vue y Vue Router del bundle
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter' // Aseguramos que se usen estos nombres globales
                }
            }
        }
    },
    plugins: [vue(), dts({ tsconfigPath: './tsconfig.app.json', rollupTypes: true }), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
