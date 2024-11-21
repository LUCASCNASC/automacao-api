// /v3/produto_incluir_alterar - Inclui e Altera Produto
// Inclui e Altera Produto

describe('Compras - POST - /v3/produto_incluir_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Compras/v3_post_produto_incluir_alterar';
  
    it('POST - /v3/produto_incluir_alterar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });