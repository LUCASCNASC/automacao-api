// /v3/baixa_pedido - Fechar e Baixar pedido
// Fechar e Baixar pedido de venda pelo TOTEM

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pagamento pedido - POST - /v3/baixa_pedido', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_baixa_pedido';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_baixa_pedido,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });