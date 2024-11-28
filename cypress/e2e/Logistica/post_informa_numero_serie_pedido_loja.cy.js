// /v3/informa_numero_serie_pedido_loja - Dados dos números de série de um pedido de loja
// Serviço utilizado para informar número de série para itens de pedido de loja que será posteriormente faturado.

describe('Logística - POST - /v3/informa_numero_serie_pedido_loja', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json

    it('POST - /v3/informa_numero_serie_pedido_loja - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoLoja": 0,
        "reiterarSerial": 0,
        "serialPorUnidade": [
          {
            "serialPorProduto": [
              {
                "numeroSerie": "string"
              }
            ]
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_informanumeroseriepedidoloja', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });