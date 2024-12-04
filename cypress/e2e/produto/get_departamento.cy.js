// /v3/departamento - Lista de departamento
// Listas dos departamentos.

import reqBody_get_departamento from '../../fixtures/produto/get_departamento.json'

describe('Produtos - GET - /v3/departamento', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_departamento', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_departamento
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });