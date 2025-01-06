// /v3/key_value/{key} - Lista de chave e valor
// Consultar uma determinada chave e retornar o seu valor

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sistema - GET - /v3/key_value/{key}', () => {
  const url = '/Sistema/v2_sistema_key_value';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        key: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('chave');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
        });
    });
  });