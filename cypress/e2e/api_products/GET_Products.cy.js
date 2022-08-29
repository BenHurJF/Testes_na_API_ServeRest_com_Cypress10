/// <reference types="cypress" />

const { URLS_PRODUCT } = require('../../shared/urls-api-serverest');

describe('test to find products', () => {
    it('find all products', () => {
        cy.GETProducts(URLS_PRODUCT.getProducts).then((response) => {
            expect(response.body.produtos[0]).not.be.empty;
            expect(response.body.produtos.length).to.be.above(1);
        })
    });
});