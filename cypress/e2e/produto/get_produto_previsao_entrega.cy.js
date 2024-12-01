// /v3/produto_previsao_entrega - Previsão de entrega
// Previsão de entrega do produto.

describe('Produtos - GET - /v3/produto_previsao_entrega ', () => {
    const token = Cypress.env('AUTH_TOKEN');  
    
    it('Resposta 200', () => {
      const requestBody = {
        processo_venda: "",
        filial: "",
        filial_faturar: "",
        filial_saldo: "",
        sku: "",
        quantidade: "",
        local_saldo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_previsao_entrega', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });