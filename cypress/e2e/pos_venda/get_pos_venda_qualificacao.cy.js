// /v3/pos_venda_qualificacao - Qualificações Pós-venda
// listas de qualificações da pós-venda

describe('Pós-venda - GET - /v3/pos_venda_qualificacao', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v2_pos_venda_qualificacao';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/pos_venda_qualificacao - Resposta 200', () => {
      const requestBody = {}
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