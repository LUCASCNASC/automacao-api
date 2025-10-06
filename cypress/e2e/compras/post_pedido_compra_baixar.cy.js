// Testes para o endpoint: /v3/pedido_compra_baixar - Baixar Pedido de Compra
// Baixa pedido de compra simplificado, somente frete CIF
// Códigos de resposta esperados:
// - 200: OK
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Compras/v3_post_pedido_compra_baixar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Compras - POST /v3/pedido_compra_baixar', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 ao baixar pedido de compra válido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        NumeroPedido: "123456" // ajuste conforme necessário
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar baixar pedido com dados inválidos', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        NumeroPedido: "" // inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});