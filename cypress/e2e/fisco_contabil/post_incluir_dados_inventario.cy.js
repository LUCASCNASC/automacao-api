// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

import reqBody_post_incluir_dados_inventario from '../../fixtures/fisco_contabil/post_incluir_dados_inventario.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', () => {
  const url = '/Fisco/Contabil/v3_post_inventario_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_incluir_dados_inventario,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });