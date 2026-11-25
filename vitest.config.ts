import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const sassGlobals = fileURLToPath(
    new URL('./app/assets/sass/root_configuration.sass', import.meta.url)
)

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `@import '${sassGlobals}'\n`,
            },
        },
    },
    test: {
        environment: 'jsdom',
    },
})
