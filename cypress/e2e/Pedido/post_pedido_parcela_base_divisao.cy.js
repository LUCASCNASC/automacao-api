// /v3/pedido_parcela_base_divisao - Parcela base
// Divide o(s) abatimento(s) em valor(es) mantendo a quantidade de parcela e processo iguais.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_parcela_base_divisao', () => {
  const url = '/Pedido/v3_pedido_parcela_base_divisao';
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

        body: reqBody_post_pedido_parcela_base_divisao,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });