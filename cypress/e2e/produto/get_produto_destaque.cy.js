// /v3/produto_destaque - Produtos em destaque
// Lista de produtos em destaque.

describe('Produtos - GET - /v3/produto_destaque ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_destaque';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/produto_destaque  - Resposta 200', () => {
      const requestBody = {
        id_processo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });