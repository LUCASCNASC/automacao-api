// /v3/produto_bloqueio - Lista de bloqueio
// Produto bloqueado.

describe('Produtos - GET - /v3/produto_bloqueio', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        sku: "",
        id_cnpj_cpf: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_bloqueio', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });