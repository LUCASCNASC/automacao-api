// /v3/divida_cliente/{filial}/{cliente} - Títulos do cliente
// lista de títulos a receber do cliente

describe('Pagamento divida - GET - /v3/divida_cliente/{filial}/{cliente}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_cliente';
  
    it('GET - /v3/divida_cliente/{filial}/{cliente} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });