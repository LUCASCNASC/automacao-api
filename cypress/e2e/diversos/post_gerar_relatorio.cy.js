// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64

import reqBody_post_gerar_relatorio from '../../fixtures/diversos/post_gerar_relatorio.json'
import acess_token from '../../fixtures/token.json'

describe('Diversos - POST - /v3/gerar_relatorio', () => {
  const url = '/Diversos/v2_diversos_gerar_relatorio';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        body: reqBody_post_gerar_relatorio,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });