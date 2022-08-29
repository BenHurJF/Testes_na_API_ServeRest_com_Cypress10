/// <reference types="cypress" />

Cypress.Commands.add('obterTokenServeREST', () => {
    const BODY = {
        email: Cypress.env("email"),
        password: Cypress.env("password")
    }
    cy.request({
        method: 'POST',
        url: '/login',
        headers: { accept: 'application/json', 'Content-Type': 'application/json' },
        body: BODY,
        failOnStatusCode: false,
        log: false
    })
})