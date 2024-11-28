// /v3/produto_detalhe_promocao/{produto} - Promoções do produto
// Promoções do produto.

describe('Produtos - GET - /v3/produto_detalhe_promocao/{produto} ', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/produto_detalhe_promocao/{produto}  - Resposta 200', () => {
      const requestBody = {
        produto: "",
        processo_venda: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_detalhe_promocao',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });