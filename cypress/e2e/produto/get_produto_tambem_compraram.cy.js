// /v3/produto_tambem_compraram - Tambem compraram
// Relacionamento dos produtos com base em vendas conjuntas concretizadas.

describe('Produtos - GET - /v3/produto_tambem_compraram ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_tambem_compraram';
  
    it('GET - /v3/produto_tambem_compraram  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });