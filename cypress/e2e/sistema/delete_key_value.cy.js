// /v3/key_value/{key} - Exclui chave e valor
// Excluir um determindo valor pela sua chave

describe('Sistema - DELETE - /v3/key_value/{key}', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_key_value_delete';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/key_value/{key} - Resposta 200', () => {
      const requestBody = {
        key: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE',
        url,
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });