// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código

describe('Financeiro - DELETE - /v3/banco/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_banco_delete';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/banco/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
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