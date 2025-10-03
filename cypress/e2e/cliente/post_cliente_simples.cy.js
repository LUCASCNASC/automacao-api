// /v3/cliente_simples - Dados do cliente
// Incluir/Alterar cliente simplificado
// 201 - Criado
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_simples_post';
const Authorization = Cypress.env('API.PRAGMA');

describe('Cliente - POST - /v3/cliente_simples', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao incluir/alterar cliente simplificado', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, adapte conforme necessário
        nome: "Cliente Simples Teste",
        cnpj_cpf: "10987654321"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});