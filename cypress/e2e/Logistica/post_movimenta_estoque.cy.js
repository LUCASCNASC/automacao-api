// /v3/movimenta_estoque - Movimenta a entrada e saída de produtos no estoque
// Cria registros de entrada/saída de inventário, saída de imobilizados, deteriorados e de uso e consumo. Não gera nota fiscal. Não controla serial, gtin ou combustível.

import reqBody_post_movimenta_estoque from '../../fixtures/logistica/post_movimenta_estoque.json'
import acess_token from '../../fixtures/token.json'

describe('Logística - POST - /v3/movimenta_estoque', () => {
  const url = '/Log%C3%ADstica/v3_post_movimenta_estoque'
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_movimenta_estoque,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });