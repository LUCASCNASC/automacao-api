// /v3/key_value/{key} - Lista de chave e valor
// Consultar uma determinada chave e retornar o seu valor

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const key = ""; //string - OBRIGATÓRIO

describe('Sistema - GET - /v3/key_value/{key}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('chave');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
        });
    });
  });