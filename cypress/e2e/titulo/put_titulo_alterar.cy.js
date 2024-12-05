// /v3/titulo_alterar - Alterar Titulo A Receber/Pagar
// Alteracao A Receber/Pagar de Titulo e Parcelas

import reqBody_post_titulo_alterar from '../../fixtures/titulo/put_titulo_alterar.json'
import acess_token from '../../fixtures/token.json'

describe('Titulo - PUT - /v3/titulo_alterar', () => {
  const url = '/Titulo/v3_put_titulo_alterar'
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_titulo_alterar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });