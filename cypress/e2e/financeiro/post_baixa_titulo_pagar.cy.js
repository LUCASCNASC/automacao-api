// Testes para o endpoint: /v3/baixa_titulo_pagar - Baixa de título (a pagar)
// Baixar títulos a pagar.
// Códigos de resposta esperados:
// - 200: OK
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_baixa_titulo_pagar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/baixa_titulo_pagar', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 ao baixar títulos a pagar', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idTitulo: 123,
        // valor: 100.00,
        // dataPagamento: "2025-09-22"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar baixar título a pagar com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido, ajuste conforme necessário
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});