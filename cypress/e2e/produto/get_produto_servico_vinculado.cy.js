// /v3/produto_servico_vinculado - Preços do produto
// Preços do produto.

describe('Produtos - GET - /v3/produto_servico_vinculado ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_servico_vinculado';
  
    it('GET - /v3/produto_servico_vinculado  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });