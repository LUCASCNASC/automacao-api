// /v3/pedido_compra_baixar - Baixar Pedido Compra
// Baixa pedido de compra simplificado, somente frete CIF

describe('Compras - POST - /v3/pedido_compra_baixar', () => {
    const url = 'http://localhost:8091/sabium#/Compras/v3_post_pedido_compra_baixar';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pedido_compra_baixar - Resposta 200', () => {
      const requestBody = {
        "CNPJ_FilialPedido": "string",
        "CNPJ_CPFFornecedor": "string",
        "ValorTotalBaixa": 0,
        "Gerar_Parcelas_PEDIDO_ou_NOTA": "string",
        "XMLNota_Base64": "string",
        "XMLNota_Base64_Armazem": "string",
        "Numeros_Pedidos_A_Baixar": [
          null
        ],
        "Parcelas": [
          {
            "Numero_Parcela": 0,
            "Codigo_Barras": "string",
            "Forma_Pagamento": 0
          }
        ],
        "Guias_Nacionais_Recolhimento": [
          {
            "Numero_Documento": "string",
            "Autenticacao_Bancaria": "string",
            "Modelo 0=Estadual/1=Gnre": 0,
            "Data_Vencimento": "string",
            "Data_Pagamento": "string",
            "Codigo_Observacao_Fiscal": 0,
            "Valor_Documento": 0
          }
        ],
        "ICMS_ST_Distribuidor": {
          "Total_Base_Calculo_ICMS": 0,
          "Aliquota_ICMS": 0,
          "Total_Valor_ICMS": 0,
          "Total_Base_Calculo_ST": 0,
          "Aliquota_ST": 0,
          "Total_Valor_ST": 0
        },
        "Numeros_Series_Produtos": [
          {
            "GTIN": "string",
            "Codigo_Produto_Fornecedor": "string",
            "Numero_Serie": "string"
          }
        ],
        "Devolucao_Produtos": [
          {
            "GTIN": "string",
            "Codigo_Produto_Fornecedor": "string",
            "Quantidade": 0,
            "Motivo_Devolucao": 0,
            "Numeros_Series_A_Devolver": [
              null
            ]
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
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });