// /v3/produto_servico_vinculado - Preços do produto
// Preços do produto.

describe('Produtos - GET - /v3/produto_servico_vinculado ', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        sku: "",
        valor: "",
        tipo_servico: "",
        processo:""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_servico_vinculado', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });