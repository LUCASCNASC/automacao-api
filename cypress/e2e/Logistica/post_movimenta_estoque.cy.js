// /v3/movimenta_estoque - Movimenta a entrada e saída de produtos no estoque
// Cria registros de entrada/saída de inventário, saída de imobilizados, deteriorados e de uso e consumo. Não gera nota fiscal. Não controla serial, gtin ou combustível.

import reqBody_post_movimenta_estoque from '../../fixtures/logistica/post_movimenta_estoque.json'

describe('Logística - POST - /v3/movimenta_estoque', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_movimenta_estoque', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_movimenta_estoque
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });