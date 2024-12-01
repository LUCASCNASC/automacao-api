// /v3/dados_titular_excluir - Excluir dados titular
// Exclusão dos dados do titular

import reqBody_post_dados_titular_excluir from '../../fixtures/lgpd/post_dados_titular_excluir.json'

describe('Titulo - POST - /v3/dados_titular_excluir', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'GET', 
        url: '/LGPD/v3_post_lgpd_dados_titular_excluir',
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_dados_titular_excluir
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });