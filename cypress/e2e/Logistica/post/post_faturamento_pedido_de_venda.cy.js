// /v3/faturamento_pedido_de_venda - Dados para faturamento
// Fatura pedidos de venda de um cliente, que estão com situação fechado e não estão em nenhum mapa de carga. Pedido de venda poderá ser faturado completo ou parcial.
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_post_logistica_faturamentopedidovendaporcliente';
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/faturamento_pedido_de_venda', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idRegistroNota');
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('numeroNota');
        });
    });
  });