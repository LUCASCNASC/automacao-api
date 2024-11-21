// /v3/key_value - Dados de chave e valor
// Incluir/Alterar chave e valor

describe('Sistema - POST - /v3/key_value', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_key_value_post';
  
    it('POST - /v3/key_value - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });