// /v3/pesquisa_satisfacao - Pesquisa de Satisfação
// Lista das pesquisas de satisfação da pós-venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idfilial = ""; //string - OBRIGATÓRIO

describe('Pós-venda - GET - /v3/pesquisa_satisfacao', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pós-venda/v3_pesquisa_satisfacao/${idfilial}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })  
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idpesquisasatisfacao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });