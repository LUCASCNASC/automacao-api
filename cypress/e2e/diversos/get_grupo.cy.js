// /v3/grupo - Grupos
// Listar grupos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idtipogrupo = ""; //integer - OBRIGATÓRIO

describe('Diversos - GET - /v3/grupo', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
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