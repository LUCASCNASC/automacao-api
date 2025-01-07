// /v3/grupo - Grupos
// Listar grupos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idtipogrupo = ""; //integer - OBRIGATÓRIO

describe('Diversos - GET - /v3/grupo', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Diversos/v3_diversos_grupo/${idtipogrupo}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idgrupo');
          expect(resposta.body.retorno[0]).toHaveProperty('idalias');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].tipogrupo[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].tipogrupo[0]).toHaveProperty('descricao');
        });
    });
  });