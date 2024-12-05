// /v3/incluir_voucher_pagamento - Inclusão de título a pagar cliente por meio de voucher
// Validar dados do voucher e incluir título a pagar para o cliente vinculado ao voucher.

import reqBody_post_incluir_voucher_pagamento from '../../fixtures/financeiro/post_incluir_voucher_pagamento.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/incluir_voucher_pagamento', () => {
  const url = '/Financeiro/v3_financeiro_incluir_voucher_pagamento';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_incluir_voucher_pagamento,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });