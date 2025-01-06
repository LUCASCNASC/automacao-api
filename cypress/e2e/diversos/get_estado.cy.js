// /v3/estado - Estados
// Listar de estados

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/estado', () => {
  const url = '/Diversos/v2_diversos_estado';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        "uf_codigo": "string",
        "uf_nome": "string"
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
          expect(resposta.body.retorno[0]).toHaveProperty('uf_codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('uf_nome');
        });
    });
  });