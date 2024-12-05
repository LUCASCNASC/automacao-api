// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais

import reqBody_post_receber_transferencia from '../../fixtures/fisco_contabil/post_receber_transferencia.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/receber_transferencia', () => {
  const url = '/Fisco/Contabil/v3_post_receber_transferencia';
  const token = acess_token
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
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