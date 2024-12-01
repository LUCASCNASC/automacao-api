// /v3/produto_tipo_saldo_detalhe - Tipo Saldo Detalhe
// Lista de Tipo Saldo Detalhado do Produto

describe('Produtos - GET - /v3/produto_tipo_saldo_detalhe ', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilialSaldo: "",
        sku: "",
        idTipoSaldoProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v3_produto_tipo_saldo_detalhe', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });