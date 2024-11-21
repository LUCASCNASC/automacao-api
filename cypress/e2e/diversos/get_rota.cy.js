// /v3/rota - Rotas
// Listar rotas

describe('Diversos - GET - /v3/rota', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_rota';
  
    it('GET - /v3/rota - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });