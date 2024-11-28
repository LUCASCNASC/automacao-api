// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência

describe('Financeiro - PUT - /v3/agencia', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('PUT - /v3/agencia - Resposta 200', () => {
      const requestBody = {
        "codigoAgencia": 0,
        "codigoBanco": 0,
        "nome": "string",
        "gerente": "string",
        "ddd": "string",
        "telefone": "string",
        "converteDigitoParaX": true
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_agencia2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });