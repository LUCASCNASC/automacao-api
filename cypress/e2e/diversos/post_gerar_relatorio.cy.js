// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64

import reqBody_post_gerar_relatorio from '../../fixtures/diversos/post_gerar_relatorio.json'

describe('Diversos - POST - /v3/gerar_relatorio', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Diversos/v2_diversos_gerar_relatorio', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gerar_relatorio
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });