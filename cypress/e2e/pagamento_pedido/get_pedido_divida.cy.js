// /v3/pedido_divida/{filial} - Pedidos
// Lista pedidos para pagamento no TOTEM

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pagamento pedido - GET - /v3/pedido_divida/{filial}', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_divida';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        termo: "",
        idtipotef: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idpedidovenda');
          expect(resposta.body.retorno[0]).toHaveProperty('totalpedido');
          expect(resposta.body.retorno[0]).toHaveProperty('nome_cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('cpf_cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('pagaveltotem');
          expect(resposta.body.retorno[0]).toHaveProperty('permitefecharsembaixar');
          expect(resposta.body.retorno[0]).toHaveProperty('chavemd5');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('item');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('qtde');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('unidade');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('total');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('disponivelfaturamentolocal');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('modalidade');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('idcodigoenviotef');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('idcarteiradigitaltef');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('valor_parcela');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('qtde_parcelas');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('valor_operacao');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('processo');
          expect(resposta.body.retorno[0].formas_pagamento[0]).toHaveProperty('item');
        });
    });
  });