// /v3/pedido_divida/{filial} - Pedidos
// Lista pedidos para pagamento no TOTEM

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = ""; //number - OBRIGATÓRIO
const termo = ""; //string - OBRIGATÓRIO
const idtipotef = ""; //number -

describe('Pagamento pedido - GET - /v3/pedido_divida/{filial}', { env: { hideCredendials: true } }, () => {
  
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