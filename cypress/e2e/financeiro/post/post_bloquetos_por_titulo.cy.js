// /v3/bloquetos_por_titulo - Impressão meio de cobrança
// Imprimir meio de cobrança em PDF (codificação Base64)
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/bloquetos_por_titulo', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao imprimir meio de cobrança em PDF', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Financeiro/v3_financeiro_bloquetos_por_titulo`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idTitulo: 321,
        // tipoDocumento: "PDF"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});