// Testes para o endpoint: /v3/banco - Alteração de banco
// Alterar banco pelo código
// Códigos de resposta esperados:
// - 201: Criado
// - 500: Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco2';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - PUT /v3/banco', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 201 e as propriedades do banco alterado', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}${PATH_API}`,
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

  it('Deve retornar 500 ao tentar alterar banco com payload inválido', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});