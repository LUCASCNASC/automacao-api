// /v3/produto_servico/{servico} - Serviço preço
// Preço do serviço

describe('Produtos - GET - /v3/produto_servico/{servico} ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_servico';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/produto_servico/{servico}  - Resposta 200', () => {
      const requestBody = {
        servico: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url,
        //headers: { authorization }, 
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });