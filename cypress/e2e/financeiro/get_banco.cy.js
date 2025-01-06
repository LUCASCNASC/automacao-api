// /v3/banco - Lista de banco
// Listar banco

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - GET - /v3/banco', () => {
  const url = '/Financeiro/v3_financeiro_banco3';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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
          expect(resposta.body.retorno[0]).toHaveProperty('idbanco');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });