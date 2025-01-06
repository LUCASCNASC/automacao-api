// /v3/faturamento_pedido_loja - Dados para faturamento
// Fatura pedidos de loja de uma filial origem para uma filial destino que não estão em nenhum mapa de carga loja. Poderão ser faturados todos os pedidos de loja ou alguns, se especificado.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/faturamento_pedido_loja', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idRegistroNota');
        });
    });
  });