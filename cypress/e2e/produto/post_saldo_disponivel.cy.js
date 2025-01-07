// /v3/saldo_disponivel - Saldo Disponível
// Recebe uma lista de produtos e retorna uma lista com os produtos e o saldo disponível

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - POST - /v3/saldo_disponivel', { env: { hideCredendials: true } }, () => {

  it('Resposta 200', () => {

    cy.api({
      method: 'POST', 
      url: `${API_URL}/Produto/v3_produto_saldo_disponivel`,
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
      });
  });
});