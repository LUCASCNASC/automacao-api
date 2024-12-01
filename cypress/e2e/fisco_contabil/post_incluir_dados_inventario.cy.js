// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

import reqBody_post_incluir_dados_inventario from '../../fixtures/fisco_contabil/post_incluir_dados_inventario.json'

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_inventario_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_incluir_dados_inventario
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });