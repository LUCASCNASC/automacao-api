// /v3/produto - Informações do produto
// Dados dos produtos.

describe('Produtos - GET - /v3/produto ', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        termo: "",
        departamento: "",
        marca: "",
        so_promocao: "",
        so_servico: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });