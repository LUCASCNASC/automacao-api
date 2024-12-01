// /v3/processar_proxima_baixa_pendente - Baixa pendente
// Processar proxima baixa pendente

describe('Financeiro - POST - /v3/processar_proxima_baixa_pendente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_processar_proxima_baixa_pendente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });