// /v3/cep/{cep} - CEP
// Dados do CEP
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cep';
const Authorization = Cypress.env('API.PRAGMA');
const cep = ""; // string - OBRIGATÓRIO

describe('Diversos - GET - /v3/cep/{cep}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do CEP', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${cep}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('rua');
      expect(ret).to.have.property('bairro');
      expect(ret.estado[0]).to.have.property('uf_codigo');
      expect(ret.estado[0]).to.have.property('uf_nome');
      expect(ret.cidade[0]).to.have.property('cidade_codigo');
      expect(ret.cidade[0]).to.have.property('cidade_nome');
    });
  });
});