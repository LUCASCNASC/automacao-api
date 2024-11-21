// /v3/pedido_fechar_baixar_caixa - Baixar Pedido Caixa
// Fecha o pedido caso necessário, e se forem adicionados itens para baixar efetua a baixa tanto integral quanto parcial

describe('Financeiro - POST - /v3/pedido_fechar_baixar_caixa', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
  
    it('POST - /v3/pedido_fechar_baixar_caixa - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });