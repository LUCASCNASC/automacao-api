// /v3/cidade - Cidades
// Listar de cidades

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const uf = ""; //string - OBRIGATÓRIO 

describe('Diversos - GET - /v3/cidade', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('cidade_nome');
        });
    });
  });