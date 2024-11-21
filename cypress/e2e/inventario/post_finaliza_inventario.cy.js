// /v3/finaliza_inventario - Finaliza contagem de inventário pelo aplicativo
// Finaliza a contagem de inventário, podendo ser finalizado definitivo ou não

describe('Inventário - POST - /v3/finaliza_inventario', () => {
    const url = 'http://localhost:8091/sabium#/Invent%C3%A1rio/v3_post_finaliza_inventario';
  
    it('POST - /v3/finaliza_inventario - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });