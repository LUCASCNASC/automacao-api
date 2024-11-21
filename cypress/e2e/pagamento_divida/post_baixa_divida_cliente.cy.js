// /v3/baixa_divida_cliente - Baixa títulos do cliente
// Baixa título do cliente

describe('Financeiro - POST - /v3/baixa_divida_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_cliente';
  
    it('POST - /v3/baixa_divida_cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });