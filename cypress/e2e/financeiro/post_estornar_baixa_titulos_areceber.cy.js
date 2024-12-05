// /v3/estornar_baixa_titulo_areceber - Estorno de baixa de título
// Efetuar o estorno da baixa do título a receber, gerando um novo título a pagar

import reqBody_post_estornar_baixa_titulo_areceber from '../../fixtures/financeiro/post_estornar_baixa_titulos_areceber.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/estornar_baixa_titulo_areceber', () => {
  const url = '/Financeiro/v3_post_estornar_baixa_titulo_areceber';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_estornar_baixa_titulo_areceber,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });