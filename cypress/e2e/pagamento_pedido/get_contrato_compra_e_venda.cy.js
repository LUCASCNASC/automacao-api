// /v3/contrato_compra_e_venda/{filial}/{pedido} - Contrato compra/venda
// Contrato da compra e venda

describe('Pagamento pedido - GET - /v3/contrato_compra_e_venda/{filial}/{pedido}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_contrato_compra_e_venda';
  
    it('GET - /v3/contrato_compra_e_venda/{filial}/{pedido} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });