// /v3/cbo - CBO
// Lista dos CBOs

describe('Diversos - GET -/v3/cbo', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_cbo';
  
    it('GET - /v3/cbo - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });