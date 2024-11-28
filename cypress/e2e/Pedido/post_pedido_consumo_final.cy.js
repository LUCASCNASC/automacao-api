// /v3/pedido_consumo_final - Consumo Final
// Retorna se o pedido foi feito para um Consumidor Final

describe('Pedido - POST - /v3/pedido_consumo_final', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/pedido_consumo_final - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoVenda": 0,
        "processoVenda": 0,
        "idFilialSaldo": 0,
        "cliente": "string",
        "nomeModificado": "string",
        "observacao": "string",
        "observacaoPedido": "string",
        "cadastroSimplificado": false,
        "consumoFinal": true,
        "chaveMD5": "string",
        "identidadetransportadora": 0,
        "idtipoorigempedidovenda": 0,
        "empresaVendedora": "string",
        "endereco": {
          "idTipoEndereco": 0,
          "rua": "string",
          "numero": "string",
          "complemento": "string",
          "bairro": "string",
          "cidade": {
            "cidade_codigo": 0
          },
          "uf": "string",
          "cep": "string",
          "local": "string",
          "cnpj_cpf": "string"
        },
        "telefone": {
          "dddTelefone": "string",
          "numeroTelefone": "string"
        },
        "produtos": [
          {
            "id": 0,
            "idItemBase": 0,
            "sku": "string",
            "quantidade": 0,
            "localFaturamento": 0,
            "localSaldo": 0,
            "idVendedor": 0,
            "idIntencaoCompra": 0,
            "habilitarDataEntrega": true,
            "habilitarDataMontagem": true,
            "dataEntrega": "string",
            "dataMontagem": "string",
            "valorUnitarioOriginal": 0,
            "valorFinal": 0,
            "percentualDesconto": 0,
            "promocao": 0,
            "processoPromocaoaVista": 0,
            "paginaOrigem": "string",
            "idObservacao": 0,
            "permiteQtdeFracionada": true,
            "servicosVinculados": [
              {
                "id": 0,
                "idItemServico": 0,
                "codigo": 0,
                "quantidade": 0,
                "nome": "string",
                "valorUnitarioOriginal": 0,
                "valorFinal": 0,
                "idVendedor": 0,
                "nomeVendedor": "string",
                "idIntencaoCompra": 0,
                "cartaoValePresente": "string",
                "solicitarTelefone": true,
                "possuiFaixa": true,
                "isentarJurosServico": false,
                "itemOrigem": {
                  "idFilial": 0,
                  "idPedido": 0,
                  "idRegistroNota": 0,
                  "idOrigem": 0,
                  "codigoOrigem": "string",
                  "nomeOrigem": "string",
                  "tipoOrigem": 0
                },
                "sku": "string",
                "agregadoAoServicoId": 0,
                "servicoObrigatorio": false,
                "Telefones": [
                  {
                    "dddtelefone": "string",
                    "numerotelefone": "string"
                  }
                ]
              }
            ],
            "series": [
              {
                "numeroSerie": "string",
                "ddd": "string",
                "numeroTelefone": "string"
              }
            ]
          }
        ],
        "servicos": [
          {
            "id": 0,
            "idItemServico": 0,
            "codigo": 0,
            "quantidade": 0,
            "nome": "string",
            "valorUnitarioOriginal": 0,
            "valorFinal": 0,
            "idVendedor": 0,
            "nomeVendedor": "string",
            "idIntencaoCompra": 0,
            "cartaoValePresente": "string",
            "solicitarTelefone": true,
            "possuiFaixa": true,
            "isentarJurosServico": false,
            "itemOrigem": {
              "idFilial": 0,
              "idPedido": 0,
              "idRegistroNota": 0,
              "idOrigem": 0,
              "codigoOrigem": "string",
              "nomeOrigem": "string",
              "tipoOrigem": 0
            },
            "sku": "string",
            "agregadoAoServicoId": 0,
            "servicoObrigatorio": false,
            "Telefones": [
              {
                "dddtelefone": "string",
                "numerotelefone": "string"
              }
            ]
          }
        ],
        "frete": {
          "codigo": 0,
          "idItemServico": 0,
          "cobrar": false,
          "valor": 0,
          "valorOriginal": 0,
          "rota": {
            "idrota": 0,
            "local_entrega": {
              "codigo": 0,
              "cidade": {
                "cidade_codigo": 0,
                "cidade_nome": "string"
              }
            }
          }
        },
        "formasPagamento": [
          {
            "tipoEntrada": false,
            "codigo": 0,
            "idagrupamento": 0,
            "valorAbatido": 0,
            "dataPrimeiroVencimento": "string",
            "parcela": {
              "numeroVezes": 0,
              "valor": 0,
              "valorSemJuros": 0,
              "valorComJurosOriginal": 0,
              "diferencaUltimaParcelaSemJuros": 0
            },
            "servicos": [
              {
                "id": 0,
                "idItemServico": 0,
                "codigo": 0,
                "quantidade": 0,
                "nome": "string",
                "valorUnitarioOriginal": 0,
                "valorFinal": 0,
                "idVendedor": 0,
                "nomeVendedor": "string",
                "idIntencaoCompra": 0,
                "cartaoValePresente": "string",
                "solicitarTelefone": true,
                "possuiFaixa": true,
                "isentarJurosServico": false,
                "itemOrigem": {
                  "idFilial": 0,
                  "idPedido": 0,
                  "idRegistroNota": 0,
                  "idOrigem": 0,
                  "codigoOrigem": "string",
                  "nomeOrigem": "string",
                  "tipoOrigem": 0
                },
                "sku": "string",
                "agregadoAoServicoId": 0,
                "servicoObrigatorio": false,
                "Telefones": [
                  {
                    "dddtelefone": "string",
                    "numerotelefone": "string"
                  }
                ]
              }
            ]
          }
        ],
        "fiador": {
          "cnpj_cpf": "string",
          "nome": "string",
          "nomefantasia": "string",
          "datacriacao": "string",
          "idtiposexo": 0,
          "idtipocontribuinte": 0,
          "faturamentoanual": 0,
          "pai": "string",
          "mae": "string",
          "nacionalidade": "string",
          "atualizarcadastro": false,
          "idtipoestadocivil": 0,
          "idnivelformacao": 0,
          "idtipoocupacao": 0,
          "empresaatividade": "string",
          "registrojuntacomercial": "string",
          "dataregistrojuntacomercial": "string",
          "idnaturezaretencaofonte": 0,
          "contador": "string",
          "dddcontador": "string",
          "telefonecontador": "string",
          "cce_rg": "string",
          "orgaoexpedicaorg": "string",
          "dataexpedicaorg": "string",
          "numeroconselhoprofissional": "string",
          "aposentado": false,
          "pensionista": false,
          "numerocarteiraprofissional": 0,
          "gerarboleto": false,
          "seriecarteiraprofissional": "string",
          "ufcarteiraprofissional": "string",
          "numerobeneficio": "string",
          "orgaobeneficio": "string",
          "numeroinscricaotrabalhador": "string",
          "numerocarteiraorgaoclasse": "string",
          "renavam": "string",
          "inscricaomunicipal": "string",
          "inscricaosubstitutotributario": [
            {
              "uf": "string",
              "inscricaosubstitutotributario": "string",
              "exclusivodifal": false
            }
          ],
          "inscricaosuframa": "string",
          "idtiporesidencia": 0,
          "residentedesde": "string",
          "valoraluguel": 0,
          "maladireta": false,
          "placaveiculo": "string",
          "veiculoquitado": true,
          "valoroutrasrendas": 0,
          "descricaooutrasrendas": "string",
          "email": "string",
          "emailnfe": "string",
          "contato": "string",
          "observacao": "string",
          "expostapoliticamente": false,
          "relacaoexpostapoliticamente": true,
          "emancipado": false,
          "linkdocumento": "string",
          "prolabore": 0,
          "observacaovenda": "string",
          "receberemailmarketing": false,
          "verbarebate": false,
          "cidadenaturalidade": {
            "cidade_codigo": 0
          },
          "conjuge": {
            "cnpj_cpf": "string"
          },
          "cnae": {
            "idcnae": 0
          },
          "endereco": [
            {
              "idtipoendereco": 0,
              "cep": "string",
              "endereco": "string",
              "numero": "string",
              "complemento": "string",
              "caixapostal": "string",
              "bairro": "string",
              "cidade": {
                "cidade_codigo": 0
              }
            }
          ],
          "telefone": [
            {
              "idtipotelefone": 0,
              "ddd": "string",
              "numero": "string",
              "ramal": "string"
            }
          ],
          "referencia": [
            {
              "pessoal": [
                {
                  "idreferenciapessoal": 0,
                  "nome": "string",
                  "ddd": "string",
                  "telefone": "string",
                  "graurelacionamento": "string",
                  "email": "string",
                  "datainclusao": "string"
                }
              ],
              "comercial": [
                {
                  "idreferenciacomercial": 0,
                  "empresa": "string",
                  "ddd": "string",
                  "telefone": "string",
                  "contato": "string",
                  "observacao": "string",
                  "email": "string"
                }
              ],
              "bancaria": [
                {
                  "idreferenciabancaria": 0,
                  "agencia": "string",
                  "conta": "string",
                  "dataabertura": "string",
                  "bancoboleto": false,
                  "ddd": "string",
                  "telefone": "string",
                  "gerente": "string",
                  "email": "string",
                  "cnpj_cpf_correntista": "string",
                  "nomecorrentista": "string",
                  "idtipoconta": 0,
                  "operacaobancaria": "string",
                  "idformapagamento": 0,
                  "idtipochavepix": "1 - Telefone, 2 - Email, 3 - CPF CNPJ, 4 - Aleatória",
                  "chavepix": "string",
                  "banco": [
                    {
                      "codigo": 0
                    }
                  ]
                }
              ],
              "financeira": [
                {
                  "idreferenciafinanceira": 0,
                  "inicioexperienciacredito": "string",
                  "localexperiencia": "string",
                  "planoexperiencia": 0,
                  "possuicartaofinanceira": false,
                  "valorprestacao": 0
                }
              ]
            }
          ],
          "empregaticio": [
            {
              "iddadosempregaticio": 0,
              "empresacnpj": "string",
              "ddd": "string",
              "telefone": "string",
              "empresa": "string",
              "idramoatividade": 0,
              "empresacep": "string",
              "empresaendereco": "string",
              "empresanumero": "string",
              "empresabairro": "string",
              "empresacomplementoendereco": "string",
              "admissao": "string",
              "salario": 0,
              "dtcomprovante": "string",
              "idtipocomprovante": 0,
              "empresasetor": "string",
              "empresacontato": "string",
              "confirmadopor": "string",
              "desligamento": "string",
              "cargo": "string",
              "empresacidade": {
                "cidade_codigo": 0
              },
              "cbo": {
                "idcbofamilia": 0,
                "idcbo": 0
              }
            }
          ],
          "dependente": [
            {
              "iddependente": 0,
              "nome": "string",
              "datanascimento": "string",
              "idgrauparentesco": 0,
              "idtiposexo": 0,
              "deduzirimpostoirpf": false
            }
          ],
          "infcomplementar": [
            {
              "idpessoainformacoes": 0,
              "descricao": "string",
              "datamovimento": "string",
              "idusuario": 0
            }
          ],
          "rota": {
            "idrota": 0,
            "local_entrega": {
              "codigo": 0,
              "cidade": {
                "cidade_codigo": 0,
                "cidade_nome": "string"
              }
            }
          }
        },
        "formaPagamentoCalculo": {
          "processoReceber": 0,
          "processoPromocao": 0,
          "tipoVendaPromocao": 0,
          "dataPrimeiroVencimento": "string",
          "valorAbatimento": 0,
          "valorServicoVinculado": 0,
          "valorMaximoParcela": 0
        }
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_consumo_final', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });