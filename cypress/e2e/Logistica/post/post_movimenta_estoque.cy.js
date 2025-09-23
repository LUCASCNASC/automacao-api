// /v3/movimenta_estoque - Movimenta a entrada e saída de produtos no estoque
// Cria registros de entrada/saída de inventário, saída de imobilizados, deteriorados e de uso e consumo. Não gera nota fiscal. Não controla serial, gtin ou combustível.
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/movimenta_estoque', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Logística/v3_post_movimenta_estoque`, 
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