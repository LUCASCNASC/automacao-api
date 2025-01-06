// /v3/saldo_disponivel/{idFilial}/{idPedidoVenda} - Saldo Disponível dos itens do Pedido
// Retorna o saldo dispinível dos ítens do pedido de venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idPedidoVenda = ""; //integer - OBRIGATÓRIO

describe('Pedido - GET - /v3/saldo_disponivel/{idFilial}/{idPedidoVenda}', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
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