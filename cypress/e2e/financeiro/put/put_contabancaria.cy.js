// /v3/contabancaria - Alteração de conta bancária
// Alterar conta bancária pelo código do banco, código da agência e código da conta
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_conta_bancaria2';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - PUT - /v3/contabancaria', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 ao alterar conta bancária', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // codigoBanco: 1,
        // codigoAgencia: 1001,
        // numeroConta: "123456-7",
        // titular: "Empresa Alterada"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      // Adicione asserts específicos, se necessário
    });
  });
});