// /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda} - Impressoes Disponíveis Pedido
// Retorna a lista do que pode ser impresso em um pedido de venda.
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO
const idPedidoVenda = ""; //number - OBRIGATÓRIO

describe('Pedido - GET - /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pedido/v3_pedido_impressoes_disponiveis/${idFilial}/${idPedidoVenda}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idpedidovenda');
          expect(resposta.body.retorno[0]).toHaveProperty('imprimeNota');
          expect(resposta.body.retorno[0]).toHaveProperty('imprimecontratoservico');
          expect(resposta.body.retorno[0]).toHaveProperty('imprimecarne');
          expect(resposta.body.retorno[0]).toHaveProperty('imprimeContratoCompraVenda');
        });
    });
  });