/// <reference types="cypress" />

const { URLS_PRODUCT } = require('../../shared/urls-api-serverest');

describe('validate product registration', () => {
    let body;

    beforeEach('created product', () => {
        cy.constructBody().then((Body) => {
            body = Body;
        })
    })

    it('TC 1 - created product', () => {
        cy.POSTProduct(URLS_PRODUCT.postProduct, body).then((response) => {
           expect(response.body.message).to.equal('Cadastro realizado com sucesso')
           expect(response.body._id).not.be.empty;
        })
    });

    it('TC 2 - validate product existig', () => {
        cy.POSTProduct(URLS_PRODUCT.postProduct, body).then((response) => {
          let body = response.requestBody;
        cy.POSTProduct(URLS_PRODUCT.postProduct, body).then((response) => {
            expect(response.status).eq(400)
            expect(response.body.message).to.be.eq('Já existe produto com esse nome')
       })
     })
    });
});