// /v3/banco - Inclusão de banco
// Incluir cadastro de banco

describe('Financeiro - POST - /v3/banco', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_banco1';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/banco - Resposta 200', () => {
      const requestBody = {
        "codigo": 0,
        "nome": "string",
        "numeroDigitosConta": 0,
        "agenciaPossuiDv": true,
        "cip": "string",
        "numeroDigitosDvConta": 0
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