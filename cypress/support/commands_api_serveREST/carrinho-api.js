/// <reference types="cypress" />

const { URLS_CARRINHO } = require('../../shared/urls-api-serverest');

Cypress.Commands.add('GETCarrinho', () => {
    const uri = URLS_CARRINHO.getCarrinho;
    cy.request({
        method: 'GET',
        url: uri,
        headers: { 'Content-Type': 'application/json' },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('POSTCarrinho', (body) => {
    const uri = URLS_CARRINHO.postCarrinho;
    cy.obterTokenServeREST().then((response) => {
        const TOKEN = response.body.authorization;
        cy.request({
            method: 'GET',
            url: uri,
            headers: { authorization: TOKEN, 'Content-Type': 'application/json' },
            body: body,
            failOnStatusCode: false
        })
    })
})

//  cy.obterTokenServeREST().then((response) => {
//    const TOKEN = response.body.authorization;
// headers: { authorization: TOKEN }