// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF

describe('Compras - POST - /v3/pedido_compra_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Compras/v3_post_pedido_compra_incluir';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/pedido_compra_incluir - Resposta 200', () => {
      const requestBody = {
        "CNPJ_FilialPedido": "string",
        "CNPJ_CPFFornecedor": "string",
        "CNPJ_Fornecedor_Base_Fiscal": "string",
        "ProcessoCompra": 0,
        "CodigoComprador": 0,
        "PedidoFornecedor": "string",
        "Observacao": "string",
        "SomarFreteBaseIPI": true,
        "PercentualFreteCIF": 0,
        "TotalDescontoIncondicional": 0,
        "ValorTotalPedido": 0,
        "CodigoLocalSaldo": 0,
        "CodigoRepresentante": 0,
        "CodigoTransportadora": 0,
        "CodigoTipoFrete": 0,
        "CodigoTipoRateioFrete": 0,
        "RemarcarPreco": true,
        "Vendor ou Compor": true,
        "PercentualVendor": 0,
        "DiasDataBaseParcela": 0,
        "NumeroFilialReservaAutomatica": 0,
        "ObservacaoVPC": "string",
        "ItensPedido": [
          {
            "ItemPedido": 0,
            "Produto": 0,
            "GradeX": 0,
            "GradeY": 0,
            "Quantidade": 0,
            "ValorUnitarioItem": 0,
            "PercentualIPI": 0,
            "ValorFreteUnitario": 0,
            "PercentualFreteUnitario": 0,
            "DataPrevisaoFaturamento": "string",
            "DataPrevisaoEntrega": "string"
          }
        ],
        "Parcelas": [
          {
            "NumeroParcela": 0,
            "PrazoDiasVencimento": 0,
            "ValorParcela": 0
          }
        ],
        "Filais_Reserva": [
          {
            "ItemPedidoCompra": 0,
            "Numero_Filial": 0,
            "Quantidade": 0
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
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });