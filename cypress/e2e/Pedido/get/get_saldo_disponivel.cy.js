// /v3/saldo_disponivel/{idFilial}/{idPedidoVenda} - Saldo Disponível dos itens do Pedido
// Retorna o saldo dispinível dos ítens do pedido de venda
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idPedidoVenda = ""; //integer - OBRIGATÓRIO

describe('Pedido - GET - /v3/saldo_disponivel/{idFilial}/{idPedidoVenda}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Pedido/v3_pedido_saldo_disponivel/${idFilial}/${idPedidoVenda}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idProduto');
          expect(resposta.body.retorno[0]).toHaveProperty('idGradeX');
          expect(resposta.body.retorno[0]).toHaveProperty('idGradeY');
          expect(resposta.body.retorno[0]).toHaveProperty('idLocalSaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('saldoDisponivel');
          expect(resposta.body.retorno[0]).toHaveProperty('saldoTotal');
        });
    });
  });