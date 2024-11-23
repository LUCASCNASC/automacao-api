// /v3/filial_detalhe/{filial} - Dados da Filial
// Retorna dados cadastrais da filial.

describe('Filial - GET - /v3/filial_detalhe/{filial}', () => {
    const url = 'http://localhost:8091/sabium#/Filial/v2_filial_detalhe';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/filial_detalhe/{filial} - Resposta 200', () => {
      const requestBody = {
        filial: ""
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