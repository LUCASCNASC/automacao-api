// /v3/produto_incluir_alterar - Inclui e Altera Produto
// Inclui e Altera Produto
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Compras/v3_post_produto_incluir_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST - /v3/produto_incluir_alterar', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao incluir/alterar produto', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário
        CodigoProduto: "12345",
        NomeProduto: "Produto Teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});