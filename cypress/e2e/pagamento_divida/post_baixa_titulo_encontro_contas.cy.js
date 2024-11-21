// /v3/baixa_titulo_encontro_contas - Baixa título encontro de contas
// Baixa título por encontro de contas

describe('Financeiro - POST - /v3/baixa_titulo_encontro_contas', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_titulo_encontro_contas';
  
    it('POST - /v3/baixa_titulo_encontro_contas - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });