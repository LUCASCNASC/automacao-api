// /v3/operacoes_tef - Operacões TEF
// Retorna as operações tef configuradas

describe('Diversos - GET - /v3/operacoes_tef', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_operacoes_tef';
  
    it('GET - /v3/operacoes_tef - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });