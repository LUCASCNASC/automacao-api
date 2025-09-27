// /v3/grupo - Grupos
// Listar grupos
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v3_diversos_grupo';
const Authorization = Cypress.env('API.PRAGMA');
const idtipogrupo = ""; // integer - OBRIGATÓRIO

describe('Diversos - GET - /v3/grupo', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do grupo', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idtipogrupo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idgrupo');
      expect(ret).to.have.property('idalias');
      expect(ret).to.have.property('descricao');
      expect(ret.tipogrupo[0]).to.have.property('codigo');
      expect(ret.tipogrupo[0]).to.have.property('descricao');
    });
  });
});