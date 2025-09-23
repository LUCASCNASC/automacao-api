// /v3/forma_pagamento - Forma pagamento
// Lista formas de pagamento
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Diversos - GET - /v3/forma_pagamento', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de forma de pagamento', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Diversos/v2_diversos_forma_pagamento`,
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
});