// /v3/pedido_compra_baixar - Baixar Pedido Compra
// Baixa pedido de compra simplificado, somente frete CIF
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Compras/v3_post_pedido_compra_baixar';
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST - /v3/pedido_compra_baixar', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao baixar pedido de compra', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
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