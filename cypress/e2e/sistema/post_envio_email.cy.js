// /v3/envio_email - Dados para Envio de Email
// Enviar Email

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sistema - POST - /v3/envio_email', () => {
  const url = '/Sistema/v3_sistema_envio_email_post';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST',
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_envio_email,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });