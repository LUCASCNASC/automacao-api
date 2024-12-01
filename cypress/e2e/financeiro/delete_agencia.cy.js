// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', () => {
    const token = Cypress.env('AUTH_TOKEN');
    
  
    it('Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Financeiro/v3_financeiro_agencia_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });