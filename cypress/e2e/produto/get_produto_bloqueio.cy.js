// /v3/produto_bloqueio - Lista de bloqueio
// Produto bloqueado.

describe('Produtos - GET - /v3/produto_bloqueio', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_bloqueio';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/produto_bloqueio - Resposta 200', () => {
      const requestBody = {
        filial: "",
        sku: "",
        id_cnpj_cpf: ""
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