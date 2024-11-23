// /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Lista parâmetro (1055 - percentual desconto no recebimento de título)
// Listar o valor do parâmetro 1055 - percentual máximo de desconto no recebimento de títulos do caixa.

describe('Financeiro - GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Resposta 200', () => {
      const requestBody = {
        idFilial: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });