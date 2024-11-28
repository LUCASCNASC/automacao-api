// /v3/nota_fiscal_alterar/ - Alteração de nota fiscal
// Alterar nota fiscal do tipo manual

describe('Fisco/Contábil - POST - /v3/nota_fiscal_alterar/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/nota_fiscal_alterar/ - Resposta 200', () => {
      const requestBody = {
        "ID_Filial": 0,
        "ID_Registro_Nota": 0,
        "ID_Processo_Nota": 0,
        "Numero_Nota": 0,
        "Numero_Serie": "string",
        "Data_Emissao_Nota": "string",
        "Data_Movimento_Nota": "string",
        "ID_Tipo_Documento_Fiscal": 0,
        "Codigo_Nota_Sefaz": "string",
        "XML_Base64": "string",
        "ID_Observacao_Fiscal": 0,
        "ID_Numero_ECF": 0,
        "Total_Nota": 0,
        "Total_Financeiro": 0,
        "Total_Desconto": 0,
        "Total_Frete": 0,
        "Total_Seguro": 0,
        "Total_Despesas": 0,
        "Total_Outras_Diversas": 0,
        "Total_Despesa_Nao_Tributavel": 0,
        "Total_Deducao_ISS": 0,
        "ID_Filial_Origem": 0,
        "CNPJ_CPF_Nota": "string",
        "Consumidor_Final": true,
        "CCE_RG": "string",
        "Volume": 0,
        "ID_Motorista": 0,
        "ID_Tipo_Frete": 0,
        "Observacao": "string",
        "Somar_Total_Nota": true,
        "Enderecos_Nota": [
          {
            "Tipo_Endereco": 0,
            "CNPJ_CPF_Entrega": "string",
            "Endereco": "string",
            "Complemento": "string",
            "Caixa_Postal": "string",
            "Bairro": "string",
            "CEP": "string",
            "DDD": "string",
            "Telefone": "string",
            "Cidade": 0
          }
        ],
        "Produtos": [
          {
            "Tipo_Operacao": 0,
            "ID_Itembase": 0,
            "ID_Produto": 0,
            "ID_GradeX": 0,
            "ID_GradeY": 0,
            "Quantidade": 0,
            "Valor_Unitario": 0,
            "Aliquota_IPI": 0
          }
        ],
        "Patrimonios": [
          {
            "Tipo_Operacao": 0,
            "ID_Itembase": 0,
            "ID_Patrimonio": 0,
            "ID_Incorporacao": 0,
            "Valor": 0,
            "Adicao": 0,
            "Item_Adicao": 0
          }
        ],
        "Impostos": [
          {
            "Tipo_Operacao": 0,
            "ID_Tipo_Imposto": 0,
            "CFOP": 0,
            "Aliquota": 0,
            "Base_Calculo": 0,
            "Valor_Imposto": 0,
            "Valor_Isento": 0,
            "Valor_Outras": 0,
            "Valor_Observacao": 0
          }
        ],
        "Titulo_Parcelas": [
          {
            "Tipo_Operacao": 0,
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Contabil": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_nota_fiscal_alterar', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });