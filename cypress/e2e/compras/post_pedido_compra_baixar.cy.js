// /v3/pedido_compra_baixar - Baixar Pedido Compra
// Baixa pedido de compra simplificado, somente frete CIF

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Compras - POST - /v3/pedido_compra_baixar', () => {
  const url = '/Compras/v3_post_pedido_compra_baixar';
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
        body: reqBody_post_pedido_compra_baixar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });