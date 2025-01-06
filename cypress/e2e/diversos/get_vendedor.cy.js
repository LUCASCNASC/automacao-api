// /v3/vendedor - Vendedor
// Lista dos vendedores

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const termo = ""; //string - OBRIGATÓRIO
const limit = ""; //string
const offset = ""; //string
const sort = ""; //string

describe('Diversos - GET - /v3/vendedor', { env: { hideCredendials: true } }, () => {
  
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
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idvendedor');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('nome');
        });
    });
  });