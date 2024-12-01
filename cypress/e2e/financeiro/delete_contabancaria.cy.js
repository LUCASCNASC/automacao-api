// /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Exclusão de conta bancária
// Excluir conta bancária pelo código do banco, agência e conta

describe('Financeiro - DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: "",
        codigoConta: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Financeiro/v3_financeiro_conta_bancaria_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });