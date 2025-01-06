// /v3/cbo - CBO
// Lista dos CBOs

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const termo = ""; //string - OBRIGATÓRIO
const limit = ""; //string
const offset = ""; //string
const sort = ""; //string


describe('Diversos - GET -/v3/cbo', { env: { hideCredendials: true } }
  , () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('count');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idcbo');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idcbofamilia');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('descricao');
        });
    });
  });