// /v3/filial_lista/ - Dados Filial
// Retorna uma lista das filiais

describe('Projeto Real Time - GET - /v3/filial_lista/', () => {
    const url = 'http://localhost:8091/sabium#/Projeto%20Real%20Time';
  
    it('GET - /v3/filial_lista/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });