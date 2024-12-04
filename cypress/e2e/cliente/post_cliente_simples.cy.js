// /v3/cliente_simples - Dados do cliente
// Incluir/Alterar cliente simplificado

import reqBody_post_cliente_simples from '../../fixtures/cliente/post_cliente_simples.json'

describe('Cliente - POST - /v3/cliente_simples', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Cliente/v3_cliente_simples_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_cliente_simples
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });