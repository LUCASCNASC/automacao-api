// /v3/produto_incluir_alterar - Inclui e Altera Produto
// Inclui e Altera Produto

import reqBody_post_pedido_compra_alterar from '../../fixtures/compras/post_produto_incluir_alterar.json'

describe('Compras - POST - /v3/produto_incluir_alterar', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Compras/v3_post_produto_incluir_alterar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_compra_alterar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });