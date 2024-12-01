// /v3/gerar_sped_fiscal - Gera SPED fiscal
// Incluir solicitação de processamento para gerar o SPED fiscal

import reqBody_post_gerar_sped_fiscal from '../../fixtures/fisco_contabil/post_gerar_sped_fiscal.json'

describe('Fisco/Contábil - POST - /v3/gerar_sped_fiscal', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_sped_fiscal', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gerar_sped_fiscal
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });