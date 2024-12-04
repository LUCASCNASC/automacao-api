// /v3/produto_relacionado - Produtos relacionados
// produtos relacionados.

describe('Produtos - GET - /v3/produto_relacionado ', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        lista: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_relacionado', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });