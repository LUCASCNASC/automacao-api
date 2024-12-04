// /v3/produto_tambem_compraram - Tambem compraram
// Relacionamento dos produtos com base em vendas conjuntas concretizadas.

describe('Produtos - GET - /v3/produto_tambem_compraram ', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        lista: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_tambem_compraram', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });