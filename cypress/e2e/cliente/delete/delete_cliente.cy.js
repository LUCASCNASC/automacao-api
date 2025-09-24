// /v3/cliente/{cliente} - Dados do cliente
// Excluir cliente
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const cliente = ""; // string

describe('Cliente - DELETE - /v3/cliente/{cliente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir cliente', () => {
    cy.request({
      method: 'DELETE',
      url: `${BASE_URL}/Cliente/v2_cliente_get_delete_delete/${cliente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});