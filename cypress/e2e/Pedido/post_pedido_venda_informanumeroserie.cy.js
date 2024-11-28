// /v3/pedido_venda_informanumeroserie/ - Dados dos números de série de um item do pedido de venda
// Serviço utilizado para informar número de série para produtos que controlam serial ou solicitam serial na venda

describe('Pedido - POST - /v3/pedido_venda_informanumeroserie/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/pedido_venda_informanumeroserie/ - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idItemBase": 0,
        "serialPorUnidade": [
          {
            "serialPorProduto": [
              {
                "numeroSerie": "string",
                "ddd": "string",
                "numeroCelular": "string"
              }
            ]
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_post_pedido_venda_informanumeroserie', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });