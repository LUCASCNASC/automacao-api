// /v3/validar_documento_diverso_entrada_incluir/ - Valida inclusão de documento diverso (entrada)
// Validar inclusão de documento diverso de entrada

describe('Fisco/Contábil - POST - /v3/validar_documento_diverso_entrada_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/validar_documento_diverso_entrada_incluir/ - Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial": "01001001000101",
        "CNPJ_CPF_Fornecedor": "01001001000101 ou 00100100101",
        "Processo_Mestre": 0,
        "Conta_Corrente": 0,
        "Data_Emissao": "string",
        "Data_Movimento": "string",
        "Numero_Documento": "string",
        "Numero_Serie": "string",
        "Tipo_Documento_Fiscal": 0,
        "Numero_Observacao_Fiscal": 0,
        "Total_Frete_Despesa": 0,
        "Total_Outras_Diversas": 0,
        "Total_Deducao_ISS": 0,
        "Total_Documento": 0,
        "CNPJ_CPF_Destino": "01001001000101 ou 00100100101",
        "CNPJ_CPF_Remetente": "01001001000101 ou 00100100101",
        "Numero_Veiculo": 0,
        "Observacao": "string",
        "Descricao": "string",
        "Indicador_Prestacao_Servico_Reinf": 0,
        "Classificacao_Servico_Prestado_Reinf": 0,
        "Tipo_Repasse_Reinf": 0,
        "Cadastro_Nacional_Obras": "string",
        "Documento_Referenciado": "string",
        "Forma_Pagamento": 0,
        "Chave_NFe": "string",
        "Servico_Realizado_Municipio_Prestador": true,
        "ISSQN_Retido_Base_Calculo": 0,
        "ISSQN_Retido_Aliquota": 0,
        "IRPF_Base_Calculo": 0,
        "IRPF_Aliquota": 0,
        "IRPF_Deducao": 0,
        "XMLNota_Base64": "string",
        "Parcelas": [
          {
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Parcela": 0,
            "Valor_Juros_Multa": 0,
            "Codigo_Barras": "string"
          }
        ],
        "CentroCustos": [
          {
            "Debito_Credito": "string",
            "Classificacao_Centro_Custo": "string",
            "Codigo_Tipo_Imposto": 0,
            "Valor": 0
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