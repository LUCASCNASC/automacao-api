// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_bloqueto';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/bloqueto', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao incluir meio de cobrança', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // cliente: "12345678901",
        // valor: 150.00,
        // vencimento: "2025-09-22"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('gerado');
      expect(ret).to.have.property('jaIncluso');
      expect(ret).to.have.property('quitado');
      expect(ret).to.have.property('processoNaoGera');
      expect(ret).to.have.property('clienteNaoGera');
    });
  });
});