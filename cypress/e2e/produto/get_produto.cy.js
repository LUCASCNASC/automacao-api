// /v3/produto - Informações do produto
// Dados dos produtos.

describe('Produtos - GET - /v3/produto ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_get';
  
    it('GET - /v3/produto  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });