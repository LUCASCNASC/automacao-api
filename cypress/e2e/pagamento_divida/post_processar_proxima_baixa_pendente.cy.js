// /v3/processar_proxima_baixa_pendente - Baixa pendente
// Processar proxima baixa pendente

describe('Financeiro - POST - /v3/processar_proxima_baixa_pendente', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_processar_proxima_baixa_pendente';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/processar_proxima_baixa_pendente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });