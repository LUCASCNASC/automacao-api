// /v3/movimenta_estoque - Movimenta a entrada e saída de produtos no estoque
// Cria registros de entrada/saída de inventário, saída de imobilizados, deteriorados e de uso e consumo. Não gera nota fiscal. Não controla serial, gtin ou combustível.

describe('Logística - POST - /v3/movimenta_estoque', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
    it('POST - /v3/movimenta_estoque - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idProcesso": 0,
        "dataMovimento": "string",
        "idLocalSaldo": 0,
        "produtos": [
          {
            "idProduto": 0,
            "idGradeX": 0,
            "idGradeY": 0,
            "quantidade": 0,
            "centroCusto": "string",
            "observacao": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_movimenta_estoque', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });