// /v3/contrato_servico/{filial}/{pedido} - Contrato serviço
// Contrato do serviço

describe('Pagamento pedido - GET - /v3/contrato_servico/{filial}/{pedido}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_contrato_servico';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/contrato_servico/{filial}/{pedido} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      })
      .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });