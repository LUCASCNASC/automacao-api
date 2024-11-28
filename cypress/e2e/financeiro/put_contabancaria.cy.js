// /v3/contabancaria - Alteração de conta bancária
// Alterar conta bancária pelo código do banco, código da agência e código da conta

describe('Financeiro - PUT - /v3/contabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('PUT - /v3/contabancaria - Resposta 200', () => {
      const requestBody = {
        "codigoBanco": 0,
        "codigoAgencia": 0,
        "codigoConta": "string",
        "titular": "string",
        "convenio": "string"
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_conta_bancaria2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });