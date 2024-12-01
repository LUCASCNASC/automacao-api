// /v3/titulo_alterar - Alterar Titulo A Receber/Pagar
// Alteracao A Receber/Pagar de Titulo e Parcelas

import reqBody_post_titulo_alterar from '../../fixtures/titulo/put_titulo_alterar.json'

describe('Titulo - PUT - /v3/titulo_alterar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'PUT', 
        url: '/Titulo/v3_put_titulo_alterar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_titulo_alterar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });