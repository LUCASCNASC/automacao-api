// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_documento_outras_receitas_incluir';
  
    it('POST - /v3/documento_outras_receitas_incluir- Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });