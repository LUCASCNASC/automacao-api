// /v3/produto_incluir_alterar - Inclui e Altera Produto
// Inclui e Altera Produto

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Compras - POST - /v3/produto_incluir_alterar', () => {
  const url = '/Compras/v3_post_produto_incluir_alterar';
  const token = acess_token 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_compra_alterar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });