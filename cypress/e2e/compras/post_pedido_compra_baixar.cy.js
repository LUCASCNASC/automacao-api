// /v3/pedido_compra_baixar - Baixar Pedido Compra
// Baixa pedido de compra simplificado, somente frete CIF
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST - /v3/pedido_compra_baixar', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao baixar pedido de compra', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Compras/v3_post_pedido_compra_baixar`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário
        NumeroPedido: "123456"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});