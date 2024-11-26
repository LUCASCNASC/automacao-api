// /v3/carne_pedido/{filial}/{pedido} - Carne Pedido Venda
// Impressão de Carnê por Pedido de Venda

describe('Pagamento pedido - GET - /v3/carne_pedido/{filial}/{pedido}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedido_carne_pedido';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/carne_pedido/{filial}/{pedido} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody}).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });