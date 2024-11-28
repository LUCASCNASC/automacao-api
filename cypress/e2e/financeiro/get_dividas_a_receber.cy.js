// /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Lista títulos (a receber)
// Listar títulos a receber de cliente

describe('Financeiro - GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        cpf_cnpj: "",
        separavinculados: "",
        limit: "",
        offset: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_dividas_a_receber', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });