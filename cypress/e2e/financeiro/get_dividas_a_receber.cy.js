// /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Lista títulos (a receber)
// Listar títulos a receber de cliente

describe('Financeiro - GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_dividas_a_receber';
  
    it('GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });