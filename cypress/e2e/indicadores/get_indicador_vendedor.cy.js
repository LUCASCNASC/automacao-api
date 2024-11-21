// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', () => {
    const url = 'http://localhost:8091/sabium#/Indicadores/v3_indicador_vendedor';
  
    it('GET - /v3/indicador_vendedor/{ano} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });