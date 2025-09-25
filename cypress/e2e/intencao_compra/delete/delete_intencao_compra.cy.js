// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/Intenção%20compra/v2_intencao_compra_delete/${codigo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });