// /v3/baixa_titulo_pagar - Baixa de título (a pagar)
// Baixar títulos a pagar.

describe('Financeiro - POST - /v3/baixa_titulo_pagar', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_baixa_titulo_pagar';
  
    it('POST - /v3/baixa_titulo_pagar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });