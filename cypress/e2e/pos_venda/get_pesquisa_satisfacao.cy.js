// /v3/pesquisa_satisfacao - Pesquisa de Satisfação
// Lista das pesquisas de satisfação da pós-venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idfilial = ""; //string - OBRIGATÓRIO

describe('Pós-venda - GET - /v3/pesquisa_satisfacao', () => {
  
    it('Resposta 200', () => {
      const requestBody = {
        idfilial: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })  
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idpesquisasatisfacao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });