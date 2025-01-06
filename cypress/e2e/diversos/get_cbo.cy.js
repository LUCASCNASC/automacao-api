// /v3/cbo - CBO
// Lista dos CBOs

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET -/v3/cbo', () => {
  const url = '/Diversos/v2_diversos_cbo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        termo: "",
        limit: "",
        offset: "",
        sort: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
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