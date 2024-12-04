// /v3/produto_serie - Numero de serie
// Lista número de série disponível do produto

describe('Produtos - GET - /v3/produto_serie ', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        filial_saldo: "",
        sku: "",
        pedido: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_serie', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });