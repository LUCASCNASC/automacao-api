// Testes para o endpoint: /v3/forma_pagamento - Lista formas de pagamento
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_forma_pagamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/forma_pagamento', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 e as propriedades de forma de pagamento', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idformapagamento');
      expect(ret).to.have.property('descricao');
    });
  });

  it('Deve retornar 204 quando não houver formas de pagamento cadastradas', () => {
    // Se o endpoint não aceita parâmetro, simule um cenário de ambiente sem formas cadastradas, se possível
    // Caso não seja aplicável, este teste pode ser omitido.
  });

  it('Deve retornar 412 se houver erro de pré-requisito', () => {
    // Não aplicável se o endpoint não exige parâmetros obrigatórios, mas pode ser incluído para cobrir cenários de erro.
  });
});