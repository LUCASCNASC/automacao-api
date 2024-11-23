// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_gerente_filial';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/gerente_filial/{idFilial} - Resposta 200', () => {
      const requestBody = {
        idFilial: ""
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