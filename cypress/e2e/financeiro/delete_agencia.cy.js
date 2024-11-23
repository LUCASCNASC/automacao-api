// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_agencia_delete';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia} - Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: ""
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