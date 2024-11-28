// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária

describe('Financeiro - POST - /v3/contabancaria', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/contabancaria - Resposta 200', () => {
      const requestBody = {
        "codigoBanco": 0,
        "codigoAgencia": 0,
        "codigoConta": "string",
        "titular": "string",
        "convenio": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST',
        url: '/Financeiro/v3_financeiro_conta_bancaria1', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });