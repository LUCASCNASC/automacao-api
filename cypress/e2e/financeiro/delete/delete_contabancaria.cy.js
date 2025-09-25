// /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Exclusão de conta bancária
// Excluir conta bancária pelo código do banco, agência e conta
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const codigoBanco = ""; // number - OBRIGATÓRIO
const codigoAgencia = ""; // number - OBRIGATÓRIO
const codigoConta = ""; // string - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir conta bancária', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/Financeiro/v3_financeiro_conta_bancaria_delete/${codigoBanco}/${codigoAgencia}/${codigoConta}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});