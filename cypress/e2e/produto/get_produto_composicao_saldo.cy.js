// /v3/produto_composicao_saldo - Composição de saldo
// Composição de saldo do produto.

describe('Produtos - GET - /v3/produto_composicao_saldo ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_composicao_saldo';
  
    it('GET - /v3/produto_composicao_saldo  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });