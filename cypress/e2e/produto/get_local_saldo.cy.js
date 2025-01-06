// /v3/local_saldo - Local saldo
// Lista saldo do produto

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/local_saldo', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

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
          expect(resposta.body.retorno[0]).toHaveProperty('idLocalsaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('saldo');
          expect(resposta.body.retorno[0]).toHaveProperty('saldodeposito');
        });
    });
  });