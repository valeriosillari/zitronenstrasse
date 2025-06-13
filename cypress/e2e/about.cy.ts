describe('About page', () => {
    it('should load and display heading', () => {
        cy.visit('/about')
        cy.get('h1').should('contain.text', 'About') // Adjust selector/expected text to your page
    })
})
