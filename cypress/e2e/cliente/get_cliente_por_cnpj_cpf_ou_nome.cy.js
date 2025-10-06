// Testes para o endpoint: /v3/cliente/{cliente} - Dados do cliente
// Retorna dados do cliente por CNPJ, CPF ou nome.
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v2_cliente_get_delete_get';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Cliente - GET /v3/cliente/{cliente}', { env: { hideCredentials: true } }, () => {
  const clienteValido = ""; // Preencha com um valor válido para ambiente de testes

  it('Deve retornar 200 e todas as propriedades esperadas para um cliente válido', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteValido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);

      const ret = response.body.retorno[0];
      // (MANTÉM todas as asserções do seu teste original aqui)
      // Você pode criar funções utilitárias para facilitar a manutenção.
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('nomefantasia');
      // ... (demais asserções do seu teste original)
    });
  });

  it('Deve retornar 204 quando não houver dados para o cliente informado', () => {
    const clienteSemDados = "00000000000000";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para cliente inválido', () => {
    const clienteInvalido = "cliente_invalido";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});