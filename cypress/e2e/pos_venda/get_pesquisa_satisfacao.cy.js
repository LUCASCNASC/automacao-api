// /v3/pesquisa_satisfacao - Pesquisa de Satisfação
// Lista das pesquisas de satisfação da pós-venda

describe('Pós-venda - GET - /v3/pesquisa_satisfacao', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v3_pesquisa_satisfacao';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pesquisa_satisfacao - Resposta 200', () => {
      const requestBody = {
        idfilial: ""
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