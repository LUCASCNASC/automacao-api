// /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda} - Impressoes Disponíveis Pedido
// Retorna a lista do que pode ser impresso em um pedido de venda.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - GET - /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda}', () => {
  const url = '/Pedido/v3_pedido_impressoes_disponiveis';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idPedidoVenda: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
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