// /v3/banco - Alteração de banco
// Alterar banco pelo código
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - PUT - /v3/banco', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades do banco alterado', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/Financeiro/v3_financeiro_banco2`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // codigo: 123,
        // nome: "Banco Atualizado"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigo');
    });
  });
});