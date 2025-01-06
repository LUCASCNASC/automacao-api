// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/receber_transferencia', () => {
  const url = '/Fisco/Contabil/v3_post_receber_transferencia';
  const token = acess_token
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        body: reqBody_post_receber_transferencia,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });