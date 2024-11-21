// /v3/documento_diverso_entrada_excluir/ - Exclusão de documento diverso (entrada)
// Excluir documento diverso de entrada

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_excluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_documento_diverso_entrada_excluir';
  
    it('POST - /v3/documento_diverso_entrada_excluir/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });