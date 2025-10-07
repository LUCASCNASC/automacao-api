const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_simples_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Cliente - POST /v3/cliente_simples', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 ou 201 ao incluir/alterar cliente simplificado', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "Cliente Simples Teste",
        cnpj_cpf: "10987654321"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 412 ao tentar incluir cliente simplificado com dados inválidos', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        nome: "",
        cnpj_cpf: ""
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});