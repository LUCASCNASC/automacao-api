// /v3/pedido_fechar_baixar_caixa - Baixar Pedido Caixa
// Fecha o pedido caso necessário, e se forem adicionados itens para baixar efetua a baixa tanto integral quanto parcial

import reqBody_post_pedido_fechar_baixar_caixa from '../../fixtures/pagamento_pedido/post_pedido_fechar_baixar_caixa.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/pedido_fechar_baixar_caixa', () => {
  const url = '/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url,
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_fechar_baixar_caixa,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });