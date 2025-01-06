// /v3/pedido_valida_reserva_saldo/{idFilial}/{idPedidoVenda} - Valida regra de controle de saldo para os produtos do pedido de venda
// Retorna informação se os itens do pedido de venda possuem saldo, terão nova previsão de faturamento ou precisam de reserva de saldo do CD. Válido apenas para regras de controle de saldo igual a 2-Somente total, 4-Somente total com reserva no CD, 5-Somente total com reserva no CD principal ou 7-Somente total com reserva na empresa distribuidora

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idPedidoVenda = ""; //integer - OBRIGATÓRIO

describe('Pedido - GET - /v3/pedido_valida_reserva_saldo/{idFilial}/{idPedidoVenda}', { env: { hideCredendials: true } }, () => {
  
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
        });
    });
  });