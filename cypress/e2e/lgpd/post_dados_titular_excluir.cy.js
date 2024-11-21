// /v3/dados_titular_excluir - Excluir dados titular
// Exclusão dos dados do titular

describe('Titulo - POST - /v3/dados_titular_excluir', () => {
    const url = 'http://localhost:8091/sabium#/LGPD/v3_post_lgpd_dados_titular_excluir';
  
    it('POST - /v3/dados_titular_excluir - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });