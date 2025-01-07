// /v3/pedido_pendencia - Pedidos pendentes
// lista de pedidos pendente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idpedidovenda = ""; //number - OBRIGATÓRIO
const idvendedor = ""; //number - OBRIGATÓRIO
const cnpj_cpf = ""; //string - OBRIGATÓRIO
const listapedidovenda = ""; //number - OBRIGATÓRIO

describe('Pedido - GET - /v3/pedido_pendencia', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pedido/v2_pedido_pendencia/${idpedidovenda}/${idvendedor}/${cnpj_cpf}/${listapedidovenda}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('codigo_pedido');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaopedidovenda');
          expect(resposta.body.retorno[0]).toHaveProperty('geradovendamobile');
          expect(resposta.body.retorno[0]).toHaveProperty('data_inclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('vendedor');
          expect(resposta.body.retorno[0]).toHaveProperty('nome_vendedor');
          expect(resposta.body.retorno[0]).toHaveProperty('total_pedido');
          expect(resposta.body.retorno[0]).toHaveProperty('idpropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaopropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao_pendencia');
        });
    });
  });