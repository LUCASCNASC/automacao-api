// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

import reqBody_post_gerar_descarga_contabil from '../../fixtures/fisco_contabil/post_gerar_descarga_contabil.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', () => {
  const url = '/Fisco/Contabil/v3_post_gerar_descarga_contabil';
  const token = acess_token
    
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_gerar_descarga_contabil,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });