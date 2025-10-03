// /v3/dados_tabela/{tabela} - Tabelas do sistema
// Carregar dados das tabelas com registros fixos no sistema
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_dados_tabela';
const Authorization = Cypress.env('API.PRAGMA');
const tabela = ""; // string - OBRIGATÓRIO

describe('Diversos - GET - /v3/dados_tabela/{tabela}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da tabela', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${tabela}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('codigo');
      expect(ret).to.have.property('descricao');
    });
  });
});