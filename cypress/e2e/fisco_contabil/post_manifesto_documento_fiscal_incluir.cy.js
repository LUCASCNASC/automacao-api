// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir';
  
    it('POST - /v3/manifesto_documento_fiscal_incluir - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });