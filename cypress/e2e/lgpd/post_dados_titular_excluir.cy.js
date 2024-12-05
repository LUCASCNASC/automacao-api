// /v3/dados_titular_excluir - Excluir dados titular
// Exclusão dos dados do titular

import reqBody_post_dados_titular_excluir from '../../fixtures/lgpd/post_dados_titular_excluir.json'
import acess_token from '../../fixtures/token.json'

describe('Titulo - POST - /v3/dados_titular_excluir', () => {
  const url = '/LGPD/v3_post_lgpd_dados_titular_excluir';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'GET', 
        url: url,
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_dados_titular_excluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });