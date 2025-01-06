// /v3/movimento_compra_venda/ - Dados Movimento - Retorna os movimentos de entrada e saída dos produtos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Projeto Real Time - POST - /v3/movimento_compra_venda/', () => {
  const url = '/Projeto%20Real%20Time/v3_post_movimento_compra_venda';
  const token = acess_token
  
    it('POST - /v3/movimento_compra_venda/ - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_movimento_compra_venda,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });