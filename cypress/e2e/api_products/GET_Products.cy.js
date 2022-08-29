/// <reference types="cypress" />

const { URLS_PRODUCT } = require('../../shared/urls-api-serverest');

describe('test to find products', () => {
    it('find all products', () => {
        cy.GETProducts(URLS_PRODUCT.getProduct).then((response) => {
            expect(response.body.produtos[0]).not.be.empty;
            expect(response.body.produtos.length).to.be.above(1);
        })
    });

    it('find a one product specific', () => {
        cy.constructBody().then((body) => {
            cy.POSTProduct(URLS_PRODUCT.postProduct, body)
        }).then((id) => {
            const ID_PROD = id.body._id;
            let nomeProd = JSON.parse(id.requestBody);
           nomeProd = nomeProd.nome;
           cy.GETProducts(URLS_PRODUCT.getOneProduct + ID_PROD).then((response) => {
            let prodConsulta = response.body.nome;
              expect(nomeProd).to.be.equal(prodConsulta);
           })
        })
    });
});