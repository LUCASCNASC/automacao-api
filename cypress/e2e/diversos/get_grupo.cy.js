// /v3/grupo - Grupos
// Listar grupos

describe('Diversos - GET - /v3/grupo', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_grupo';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/grupo - Resposta 200', () => {
      const requestBody = {
        idtipogrupo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url,
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });