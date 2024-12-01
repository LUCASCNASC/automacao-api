// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

import reqBody_post_gerar_descarga_contabil from '../../fixtures/fisco_contabil/post_gerar_descarga_contabil.json'

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
    
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_descarga_contabil', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });