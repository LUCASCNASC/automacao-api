// /v3/vendedor - Vendedor
// Lista dos vendedores

describe('Diversos - GET - /v3/vendedor', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_vendedor';
  
    it('GET - /v3/vendedor - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });