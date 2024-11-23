// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária

describe('Financeiro - POST - /v3/contabancaria', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_conta_bancaria1';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
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
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });