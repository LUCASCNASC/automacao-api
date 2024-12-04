// /v3/produto_servico/{servico} - Serviço preço
// Preço do serviço

describe('Produtos - GET - /v3/produto_servico/{servico} ', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        servico: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_servico',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });