// Testes para o endpoint: /v3/produto_incluir_alterar - Inclui e Altera Produto
// Códigos de resposta esperados:
// - 200: OK
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Compras/v3_post_produto_incluir_alterar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Compras - POST /v3/produto_incluir_alterar', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 ao incluir/alterar produto válido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CodigoProduto: "12345",
        NomeProduto: "Produto Teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar incluir/alterar produto com dados inválidos', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        CodigoProduto: "",
        NomeProduto: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});