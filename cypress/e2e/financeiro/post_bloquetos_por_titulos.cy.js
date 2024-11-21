// /v3/bloquetos_por_titulo - Impressão meio de cobrança
// Imprimir meio de cobrança em PDF (codificação Base64)

describe('Financeiro - POST - /v3/bloquetos_por_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_bloquetos_por_titulo';
  
    it('POST - /v3/bloquetos_por_titulo - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });