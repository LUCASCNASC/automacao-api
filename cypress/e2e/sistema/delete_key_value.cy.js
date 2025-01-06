// /v3/key_value/{key} - Exclui chave e valor
// Excluir um determindo valor pela sua chave

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const key = ""; //string - OBRIGATÓRIO

describe('Sistema - DELETE - /v3/key_value/{key}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE',
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
        });
    });
  });