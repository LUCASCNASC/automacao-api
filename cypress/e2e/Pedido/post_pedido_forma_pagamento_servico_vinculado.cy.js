// /v3/pedido_forma_pagamento_servico_vinculado - Serviços vinculados
// Listar serviços vinculados a forma de pagamento do pedido mobile

describe('Pedido - POST - /v3/pedido_forma_pagamento_servico_vinculado', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_forma_pagamento_servico_vinculado';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pedido_forma_pagamento_servico_vinculado - Resposta 200', () => {
      const requestBody = {
        "processovenda": 0,
        "processoreceber": 0,
        "cliente": "string",
        "totalpedido": 0,
        "numerovezes": 0,
        "valorparcelasemjuros": 0,
        "valorparcela": 0,
        "idjurofinanceirogrupo": 0,
        "dataprimeirovencimento": "string",
        "idpromocao": 0
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });