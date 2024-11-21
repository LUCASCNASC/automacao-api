// /v3/nota_fiscal_alterar/ - Alteração de nota fiscal
// Alterar nota fiscal do tipo manual

describe('Fisco/Contábil - POST - /v3/nota_fiscal_alterar/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_nota_fiscal_alterar';
  
    it('POST - /v3/nota_fiscal_alterar/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });