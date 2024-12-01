// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais

import reqBody_post_corrigir_saldo_medio_produtos from '../../fixtures/fisco_contabil/post_corrigir_saldo_medio_produtos.json'

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('POST - /v3/corrigir_saldo_medio_produtos - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_corrigir_saldo_medio_produtos
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });