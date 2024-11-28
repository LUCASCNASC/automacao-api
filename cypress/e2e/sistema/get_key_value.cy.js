// /v3/key_value/{key} - Lista de chave e valor
// Consultar uma determinada chave e retornar o seu valor

describe('Sistema - GET - /v3/key_value/{key}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/key_value/{key} - Resposta 200', () => {
      const requestBody = {
        key: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET',
        url: '/Sistema/v2_sistema_key_value', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });