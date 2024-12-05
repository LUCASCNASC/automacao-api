// /v3/cliente_simples - Dados do cliente
// Incluir/Alterar cliente simplificado

import reqBody_post_cliente_simples from '../../fixtures/cliente/post_cliente_simples.json'
import acess_token from '../../fixtures/token.json'

describe('Cliente - POST - /v3/cliente_simples', () => {
  const url = '/Cliente/v3_cliente_simples_post';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_cliente_simples,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });