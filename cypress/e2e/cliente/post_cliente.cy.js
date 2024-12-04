// /v3/cliente - Dados do cliente
// Incluir/Alterar cliente

import reqBody_post_cliente from '../../fixtures/cliente/post_cliente.json'

describe('Cliente - POST - /v3/cliente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Cliente/v3_cliente_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });