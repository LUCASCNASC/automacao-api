// /v3/nota_incluir/ - Inclusão de nota fiscal
// Incluir nota fiscal, estoque e títulos, com base no XML

import reqBody_post_nota_incluir from '../../fixtures/fisco_contabil/post_nota_incluir.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/nota_incluir/', () => {
  const url =  '/Fisco/Contabil/v3_post_nota_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_nota_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });