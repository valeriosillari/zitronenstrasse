import { defineConfig } from 'cypress'
import CONFIG from './config/config'

export default defineConfig({
    e2e: {
        // Nuxt default dev server
        baseUrl: CONFIG.appMainUrl,
        setupNodeEvents() {
            // implement node event listeners here if needed
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // pattern for test files
        supportFile: 'cypress/support/e2e.ts', // TypeScript support file
    },
})
