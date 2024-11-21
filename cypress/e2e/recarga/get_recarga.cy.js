// /v3/recarga/{idFilial}/{idItemServico} - Dados Recarga Efetuada
// Retorna os dados da recarga efetuada

describe('Recarga - GET - /v3/recarga/{idFilial}/{idItemServico}', () => {
    const url = 'http://localhost:8091/sabium#/Recarga/v3_get_recarga';
  
    it('GET - /v3/recarga/{idFilial}/{idItemServico} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });