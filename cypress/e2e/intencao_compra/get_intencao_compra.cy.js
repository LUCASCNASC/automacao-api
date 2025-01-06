// /v3/intencao_compra - Intenções de compras
// Lista intenções de compras

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const situacao = ""; //integer 

describe('Intenção compra - GET - /v3/intencao_compra', { env: { hideCredendials: true } }, () => {
  
    it('GET - /v3/intencao_compra - Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('nomecliente');
          expect(resposta.body.retorno[0]).toHaveProperty('dtregistrado');
        });
    });
  });