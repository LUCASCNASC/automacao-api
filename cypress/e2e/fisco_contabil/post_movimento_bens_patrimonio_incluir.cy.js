// /v3/movimento_bens_patrimonio_incluir/ - Incluir Movimento Patrimonio
// Incluir Movimento Patrimonio

describe('Fisco/Contábil - POST - /v3/movimento_bens_patrimonio_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_movimento_patrimonio';
  
    it('POST - /v3/movimento_bens_patrimonio_incluir/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });