// /v3/recarga - Recarga Telefone
// Efetivar Recarga Telefone

import reqBody_post_recarga from '../../fixtures//recarga/post_recarga.json'
import acess_token from '../../fixtures/token.json'

describe('Titulo - POST - /v3/recarga', () => {
  const url = '/Recarga/v3_post_recarga';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_recarga,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });