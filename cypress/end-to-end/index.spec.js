/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/')
    })

    it('renders homepage', () => {
        cy.contains('ComiQuotes');
    })
})