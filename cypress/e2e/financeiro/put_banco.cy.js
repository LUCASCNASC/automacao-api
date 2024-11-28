// /v3/banco - Alteração de banco
// Alterar banco pelo código

describe('Financeiro - PUT - /v3/banco', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('PUT - /v3/banco - Resposta 200', () => {
      const requestBody = {
        "codigo": 0,
        "nome": "string",
        "numeroDigitosConta": 0,
        "agenciaPossuiDv": true,
        "cip": "string",
        "numeroDigitosDvConta": 0
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
        url: '/Financeiro/v3_financeiro_banco2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });