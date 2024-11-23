// /v3/ecommerce_finalizar - Gerar pedido e-commerce
// Incluir/alterar pedido de venda e-commerce

describe('E-commerce - POST - /v3/ecommerce_finalizar', () => {
    const url = 'http://localhost:8091/sabium#/E-commerce/v3_ecommerce_finalizar';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/ecommerce_finalizar - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoVenda": 0,
        "idPedidoExterno": "string",
        "dataInclusao": "string",
        "idProcesso": 0,
        "cnpj_cpf": "string",
        "observacao": "string",
        "observacaoPedido": "string",
        "cadastroSimplificado": false,
        "chaveMD5": "string",
        "cnpj_cpf_empresaVendedora": "string",
        "endereco": {
          "rua": "string",
          "numero": "string",
          "complemento": "string",
          "bairro": "string",
          "cidade": 0,
          "uf": "string",
          "cep": "string"
        },
        "telefone": {
          "dddTelefone": "string",
          "numeroTelefone": "string"
        },
        "produtos": [
          {
            "idItemBase": 0,
            "idSequencia": 0,
            "sku": "string",
            "quantidade": 0,
            "idLocalSaldo": 0,
            "dataEntrega": "string",
            "dataMontagem": "string",
            "valorUnitarioOriginal": 0,
            "valorFinal": 0,
            "promocao": {
              "idPromocaoProdutoGrade": 0,
              "processoPromocaoaVista": 0
            },
            "servicosVinculado": [
              {
                "idItemServico": 0,
                "idServico": 0,
                "quantidade": 0,
                "valorUnitario": 0,
                "valorUnitarioOriginal": 0,
                "codigoProdutoEntidade": "string",
                "cartaoValePresente": "string",
                "isentarJurosServico": false,
                "telefone": {
                  "dddTelefone": "string",
                  "numeroTelefone": "string"
                }
              }
            ],
            "series": [
              {
                "numeroSerie": "string",
                "ddd": "string"
              }
            ]
          }
        ],
        "servicos": [
          {
            "idItemServico": 0,
            "idServico": 0,
            "quantidade": 0,
            "valorUnitario": 0,
            "valorUnitarioOriginal": 0,
            "codigoProdutoEntidade": "string",
            "cartaoValePresente": "string",
            "isentarJurosServico": false,
            "itemOrigem": {
              "idFilial": 0,
              "idPedido": 0,
              "idRegistroNota": 0,
              "idItemBase": 0,
              "sku": "string",
              "tipoOrigem": 0
            },
            "telefone": {
              "dddTelefone": "string",
              "numeroTelefone": "string"
            }
          }
        ],
        "frete": {
          "idEntidadeTransportadora": 0,
          "cobrar": false,
          "idServico": 0,
          "valor": 0,
          "valorOriginal": 0,
          "rota": {
            "idRota": 0,
            "idRotaCidade": 0,
            "idCidade": 0,
            "descricaoCidade": "string"
          }
        },
        "formasPagamento": [
          {
            "entrada": false,
            "idProcesso": 0,
            "idAgrupamento": 0,
            "valorAbatido": 0,
            "dataPrimeiroVencimento": "string",
            "idSequenciaProduto": 0,
            "parcela": {
              "quantidadeParcelas": 0,
              "valor": 0,
              "valorSemJuros": 0,
              "diferencaUltimaParcelaSemJuros": 0
            },
            "servicosVinculado": [
              {
                "idServico": 0,
                "quantidade": 0,
                "valorUnitario": 0,
                "valorUnitarioOriginal": 0,
                "codigoProdutoEntidade": "string",
                "cartaoValePresente": "string",
                "isentarJurosServico": false
              }
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