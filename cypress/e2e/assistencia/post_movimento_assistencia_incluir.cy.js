// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Assistencia/v3_post_movimento_assistencia_incluir';
  
    it('POST - /v3/movimento_assistencia_incluir/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });