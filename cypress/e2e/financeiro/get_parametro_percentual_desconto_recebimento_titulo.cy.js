// /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Lista parâmetro (1055 - percentual desconto no recebimento de título)
// Listar o valor do parâmetro 1055 - percentual máximo de desconto no recebimento de títulos do caixa.

describe('Financeiro - GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });