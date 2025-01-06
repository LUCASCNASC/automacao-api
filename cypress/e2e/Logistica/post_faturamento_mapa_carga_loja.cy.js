// /v3/faturamento_mapa_carga_loja - Dados de mapa de carga loja
// Faturar pedidos de loja que estão em um mapa de carga loja, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/faturamento_mapa_carga_loja', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idRegistroNota');
        });
    });
  });