// /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Lista títulos (a Pagar)
// Listar títulos a pagar de cliente ou fornecedor

describe('Financeiro - GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        cpf_cnpj: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_dividas_pagar', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });