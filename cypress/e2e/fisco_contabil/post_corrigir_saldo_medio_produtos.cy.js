// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais

import reqBody_post_corrigir_saldo_medio_produtos from '../../fixtures/fisco_contabil/post_corrigir_saldo_medio_produtos.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', () => {
  const url = '/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos';
  const token = acess_token
  
    it('POST - /v3/corrigir_saldo_medio_produtos - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_corrigir_saldo_medio_produtos,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });