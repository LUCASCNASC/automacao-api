// /v3/mapa_carga_cliente - Dados de Mapa de Carga Cliente
// Incluir/alterar cadastro de mapa de carga cliente

describe('Logística - POST - /v3/mapa_carga_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idFilialSaldo": 0,
        "idMapaCarga": 0,
        "idTipoFiltroMapaCarga": 0,
        "calculoMRP": true,
        "dataInclusao": "string",
        "idSituacaoMapaCarga": 0,
        "maximoKG": 0,
        "maximoM3": 0,
        "valorMinimoPedido": 0,
        "filiaisOrigem": "string",
        "dataPedidoInicial": "string",
        "dataPedidoFinal": "string",
        "dataPrevisaoEntrega": "string",
        "idEntidadeTransportadora": 0,
        "rotas": [
          {
            "idItem": 0,
            "idRotaInicial": 0,
            "idRotaCidadeInicial": 0,
            "idRotaFinal": 0,
            "idRotaCidadeFinal": 0
          }
        ],
        "departamentos": [
          {
            "idItem": 0,
            "classificacaoDeptoInicial": "string",
            "classificacaoDeptoFinal": "string"
          }
        ],
        "carga": [
          {
            "idFilial": 0,
            "idPedidoVenda": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });