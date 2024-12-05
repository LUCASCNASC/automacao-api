// /post_gerar_rateio_centro_custo/ - Consulta NFE
// Consulta NFE

import reqBody_post_gerar_rateio_centro_custo from '../../fixtures/fisco_contabil/post_gerar_rateio_centro_custo.json'
import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
  const url = '/Fisco/Contabil/v3_post_gerar_rateio_centro_custo';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_gerar_rateio_centro_custo,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });