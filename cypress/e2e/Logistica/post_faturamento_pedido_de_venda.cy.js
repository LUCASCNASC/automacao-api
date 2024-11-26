// /v3/faturamento_pedido_de_venda - Dados para faturamento
// Fatura pedidos de venda de um cliente, que estão com situação fechado e não estão em nenhum mapa de carga. Pedido de venda poderá ser faturado completo ou parcial.

describe('Logística - POST - /v3/faturamento_pedido_de_venda', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentopedidovendaporcliente';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/faturamento_pedido_de_venda - Resposta 200', () => {
      const requestBody = {
        "idFilial": 10050,
        "cnpjCpf": "10159687080",
        "idMotorista": 1,
        "idVeiculo": 9993,
        "idTipoFrete": 1,
        "dataSaida": "09/07/2024",
        "idObservacaoFiscal": 0,
        "serie": 215,
        "faturarSomente": [
            {
                "idFilial": 10050,
                "idItemBase": 14998
            }
        ]
    }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });