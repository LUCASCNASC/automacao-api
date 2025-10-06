// Testes para o endpoint: /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Exclui anexo do cliente pelo idcnpj_cpf e idpessoaanexo.
//
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_anexo_delete';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Cliente - DELETE /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredentials: true } }, () => {
  const idcnpj_cpfValido = ""; // Preencher com valor válido
  const idpessoaanexoValido = ""; // Preencher com valor válido

  it('Deve retornar 200 ao excluir anexo válido', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfValido}/${idpessoaanexoValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });

  it('Deve retornar 204 ao tentar excluir anexo já inexistente', () => {
    const idcnpj_cpfSemAnexo = "00000000000000";
    const idpessoaanexoSemAnexo = "000000";

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfSemAnexo}/${idpessoaanexoSemAnexo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    const idcnpj_cpfInvalido = "cpf_invalido";
    const idpessoaanexoInvalido = "anexo_invalido";

    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}${PATH_API}/${idcnpj_cpfInvalido}/${idpessoaanexoInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});