// /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Excluir um anexo pelo idcnpj_cpf e idpessoaanexo
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_anexo_delete';
const Authorization = Cypress.env('API.PRAGMA');
const idcnpj_cpf = ""; // string
const idpessoaanexo = ""; // string

describe('Cliente - DELETE - /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir anexo', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/${PATH_API}/${idcnpj_cpf}/${idpessoaanexo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});