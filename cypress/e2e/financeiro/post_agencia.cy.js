// /v3/agencia - Inclusão de agência
// Incluir agência

describe('Financeiro - POST - /v3/agencia', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_agencia1';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/agencia - Resposta 200', () => {
      const requestBody = {
        "codigoAgencia": 0,
        "codigoBanco": 0,
        "nome": "string",
        "gerente": "string",
        "ddd": "string",
        "telefone": "string",
        "converteDigitoParaX": true
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