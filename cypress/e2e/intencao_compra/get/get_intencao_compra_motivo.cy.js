// /v3/intencao_compra_motivo - Intenção compra motivo
// listas os motivos da intenção de compra
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Intenção compra - GET - /v3/intencao_compra_motivo', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Intenção%20compra/v2_intencao_compra_motivo/`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });