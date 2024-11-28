// /v3/faturamento_pedido_loja - Dados para faturamento
// Fatura pedidos de loja de uma filial origem para uma filial destino que não estão em nenhum mapa de carga loja. Poderão ser faturados todos os pedidos de loja ou alguns, se especificado.

describe('Logística - POST - /v3/faturamento_pedido_loja', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/faturamento_pedido_loja - Resposta 200', () => {
      const requestBody = {
        "idFilial": 10050,
        "idFilialDestino": 10006,
        "idMotorista": 1,
        "idVeiculo": 9993,
        "idTipoFrete": 1,
        "dataSaida": "09/07/2024",
        "idObservacaoFiscal": 0,
        "volume": 0,
        "idVolumeEspecie": 0,
        "faturarSomente": [
            {
                "idPedidoLoja": 1217
            }
        ]
    }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentopedidolojaporfilial', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });