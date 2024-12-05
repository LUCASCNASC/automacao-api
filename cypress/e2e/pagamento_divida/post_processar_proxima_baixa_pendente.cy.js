// /v3/processar_proxima_baixa_pendente - Baixa pendente
// Processar proxima baixa pendente

import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/processar_proxima_baixa_pendente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const url = '/Pagamento%20divida/v2_divida_processar_proxima_baixa_pendente';
      const token = acess_token

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });