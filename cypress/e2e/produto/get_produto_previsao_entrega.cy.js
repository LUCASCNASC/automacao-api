// /v3/produto_previsao_entrega - Previsão de entrega
// Previsão de entrega do produto.

describe('Produtos - GET - /v3/produto_previsao_entrega ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_previsao_entrega';
  
    it('GET - /v3/produto_previsao_entrega  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });