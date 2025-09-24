// /v3/cliente_anexo - Anexo do cliente
// Incluir Anexo
// 201 - Criado
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Cliente - POST - /v3/cliente_anexo', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao incluir anexo', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Cliente/v3_cliente_anexo_post/`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, adapte conforme necessário
        idcnpj_cpf: "12345678901",
        descricao: "Anexo teste",
        arquivo: "base64string"
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});