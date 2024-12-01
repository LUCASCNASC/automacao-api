// /v3/produto_destaque - Produtos em destaque
// Lista de produtos em destaque.

describe('Produtos - GET - /v3/produto_destaque ', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        id_processo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_destaque', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });