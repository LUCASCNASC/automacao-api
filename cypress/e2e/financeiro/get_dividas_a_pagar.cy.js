// /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Lista títulos (a Pagar)
// Listar títulos a pagar de cliente ou fornecedor

describe('Financeiro - GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_dividas_pagar';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        cpf_cnpj: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });