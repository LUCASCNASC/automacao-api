// /v3/faturamento_mapa_carga_cliente - Dados do mapa de carga cliente
// Fatura pedidos de venda que estão em um mapa de carga cliente, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

describe('Logística - POST - /v3/faturamento_mapa_carga_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentomapacargacliente';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/faturamento_mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {
        "idFilial": 10050,
        "idMapaCargaCliente": 731,
        "idMotorista": 1,
        "idVeiculo": 9993,
        "idTipoFrete": 0,
        "dataSaida": "09/07/2024",
        "idObservacaoFiscal": 0,
        "serie": "215",
        "faturarSomente": [
            {
                "idFilial": 10050,
                "idItemBase": 15000
            }
        ]
    }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });