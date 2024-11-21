// /v3/recarga - Recarga Telefone
// Efetivar Recarga Telefone

describe('Titulo - POST - /v3/recarga', () => {
    const url = 'http://localhost:8091/sabium#/Recarga/v3_post_recarga';
  
    it('POST - /v3/recarga - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });