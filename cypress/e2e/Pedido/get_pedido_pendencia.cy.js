// /v3/pedido_pendencia - Pedidos pendentes
// lista de pedidos pendente

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - GET - /v3/pedido_pendencia', () => {
  const url = '/Pedido/v2_pedido_pendencia';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idpedidovenda: "",
        idvendedor: "",
        cnpj_cpf: ""
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