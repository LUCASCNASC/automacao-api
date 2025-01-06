// /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo} - Lista pedidos por título
// Retornar lista de pedidos que originaram o título

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO
const idTitulo = ""; //number - OBRIGATÓRIO
const idTipoTitulo = ""; //number - OBRIGATÓRIO

describe('Financeiro - GET - /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedidoVenda');
        });
    });
  });