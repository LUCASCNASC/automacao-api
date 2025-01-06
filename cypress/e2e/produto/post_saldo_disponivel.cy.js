// /v3/saldo_disponivel - Saldo Disponível
// Recebe uma lista de produtos e retorna uma lista com os produtos e o saldo disponível

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - POST - /v3/saldo_disponivel', () => {

  it('Resposta 200', () => {

    cy.request({
      method: 'POST', 
      url: url,
      headers: { 
        Pragma: pragma_token,
        Authorization: `Bearer ${token}`,
        //'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
      });
  });
});