// /v3/produto_servico/{servico} - Serviço preço
// Preço do serviço

describe('Produtos - GET - /v3/produto_servico/{servico} ', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/produto_servico/{servico}  - Resposta 200', () => {
      const requestBody = {
        servico: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_servico',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });