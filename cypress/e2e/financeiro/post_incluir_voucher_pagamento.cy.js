// /v3/incluir_voucher_pagamento - Inclusão de título a pagar cliente por meio de voucher
// Validar dados do voucher e incluir título a pagar para o cliente vinculado ao voucher.

describe('Financeiro - POST - /v3/incluir_voucher_pagamento', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_incluir_voucher_pagamento';
  
    it('POST - /v3/incluir_voucher_pagamento - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });