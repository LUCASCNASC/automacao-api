// /v3/cliente_anexo - Anexo do cliente
// Incluir Anexo

import reqBody_post_cliente_anexo from '../../fixtures/cliente/post_cliente_anexo.json'
import acess_token from '../../fixtures/token.json'

describe('Cliente - POST - /v3/cliente_anexo', () => {
  const url = '/Cliente/v3_cliente_anexo_post';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_cliente_anexo,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });