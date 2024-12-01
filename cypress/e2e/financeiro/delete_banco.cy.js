// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código

describe('Financeiro - DELETE - /v3/banco/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Financeiro/v3_financeiro_banco_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });