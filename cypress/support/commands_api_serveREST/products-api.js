/// <reference types="cypress" />

const { URLS_PRODUCT } = require('../../shared/urls-api-serverest');

const FAKER = require('faker-br');

Cypress.Commands.add('GETProducts', () => {
    const uri = URLS_PRODUCT.getProducts;
    cy.request({
        method: 'GET',
        url: uri,
        headers: { 'Content-Type': 'application/json' },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('constructBody', () => {
    let body = {
        "nome": 'product - ' + FAKER.commerce.productName(),
        "preco": FAKER.commerce.price(),
        "descricao": FAKER.random.words(4),
        "quantidade": FAKER.random.number(400)
    }
    return body
})

Cypress.Commands.add('POSTProduct', (uri, body) => {
    cy.obterTokenServeREST().then((response) => {
        const TOKEN = response.body.authorization;
        cy.request({
            method: 'POST',
            url: uri,
            headers: { authorization: TOKEN, 'Content-Type': 'application/json' },
            body: body,
            failOnStatusCode: false
        })
    })
})