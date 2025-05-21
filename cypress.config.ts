import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8000', // Nuxt default dev server
        setupNodeEvents(on, config) {
            // implement node event listeners here if needed
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // pattern for test files
        supportFile: 'cypress/support/e2e.ts', // TypeScript support file
    },
})
