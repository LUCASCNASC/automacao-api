// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'DELETE', 
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
        });
    });
  });