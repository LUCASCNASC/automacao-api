// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_agencia2';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - PUT - /v3/agencia', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades da agência alterada', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // codigoBanco: 1,
        // codigoAgencia: 999,
        // nome: "Nova Agência",
        // endereco: "Rua Nova, 100"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigoBanco');
      expect(ret).to.have.property('codigoAgencia');
    });
  });
});