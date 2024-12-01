// /v3/produto_detalhe/{produto} - Detalhes do produto
// Detalhes do produto.

describe('Produtos - GET - /v3/produto_detalhe/{produto} ', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        produto: "",
        pesquisagtin: "",
        pedido: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_detalhe', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });