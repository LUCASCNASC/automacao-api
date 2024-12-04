// /v3/envio_email - Dados para Envio de Email
// Enviar Email

import reqBody_post_envio_email from '../../fixtures/sistema/post_envio_email.json'

describe('Sistema - POST - /v3/envio_email', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST',
        url: '/Sistema/v3_sistema_envio_email_post',
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_envio_email
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });