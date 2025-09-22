// /v3/cliente - Dados do cliente
// Incluir/Alterar cliente
// 201 - Criado
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Cliente - POST - /v3/cliente', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao incluir/alterar cliente', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Cliente/v3_cliente_post/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, adapte conforme o necessário
        nome: "Cliente Teste",
        cnpj_cpf: "12345678901"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});