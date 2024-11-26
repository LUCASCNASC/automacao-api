// /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Exclusão de conta bancária
// Excluir conta bancária pelo código do banco, agência e conta

describe('Financeiro - DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_conta_bancaria_delete';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: "",
        codigoConta: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
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