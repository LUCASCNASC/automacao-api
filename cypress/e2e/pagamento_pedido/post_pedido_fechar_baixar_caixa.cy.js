// /v3/pedido_fechar_baixar_caixa - Baixar Pedido Caixa
// Fecha o pedido caso necessário, e se forem adicionados itens para baixar efetua a baixa tanto integral quanto parcial

import reqBody_post_pedido_fechar_baixar_caixa from '../../fixtures/pagamento_pedido/post_pedido_fechar_baixar_caixa.json'

describe('Financeiro - POST - /v3/pedido_fechar_baixar_caixa', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa',
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_fechar_baixar_caixa
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });