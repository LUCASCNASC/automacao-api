// /v3/nota_fiscal/{filial} - Nota fiscal
// Nota fiscal

describe('Pagamento pedido - GET - /v3/nota_fiscal/{filial}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_nota_fiscal';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
    
  
    it('GET - /v3/nota_fiscal/{filial} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: "",
        registro_nota: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });