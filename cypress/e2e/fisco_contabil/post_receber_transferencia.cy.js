// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais

import reqBody_post_receber_transferencia from '../../fixtures/fisco_contabil/post_receber_transferencia.json'

describe('Fisco/Contábil - POST - /v3/receber_transferencia', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_receber_transferencia', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_receber_transferencia
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });