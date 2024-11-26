// /v3/movimento_bens_patrimonio_incluir/ - Incluir Movimento Patrimonio
// Incluir Movimento Patrimonio

describe('Fisco/Contábil - POST - /v3/movimento_bens_patrimonio_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_movimento_patrimonio';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/movimento_bens_patrimonio_incluir/ - Resposta 200', () => {
      const requestBody = {
        "ID_Empresa": "1",
        "Numero_Filial": "1",
        "Processo_Mestre": 0,
        "Filial_Transferencia": "10001",
        "CNPJ_CPF_Pessoa": "01001001000101 ou 00100100101",
        "Emitir_Nota": "true",
        "Numero_Nota": "string",
        "Serie": "string",
        "Data_Emissao": "string",
        "Data_Movimento": "string",
        "ID_Tipo_Documento_Fiscal": "55",
        "ID_Chave_Sefaz": "string",
        "ID_Motorista": 0,
        "ID_Veiculo": 0,
        "ID_Tipo_Frete": "1",
        "Frete": 0,
        "Despesas": 0,
        "Total_Nota": 0,
        "Observacao_Nota": "string",
        "NFE_XML_Base64": "string",
        "Dev_Numero_Nota": "string",
        "Dev_Serie": "string",
        "Dev_ID_Tipo_Documento_Fiscal": "55",
        "Dev_Data_Emissao": "string",
        "Patrimonio_Itens_NF": [
          {
            "Codigo_GTIN": "string",
            "ID_Patrimonio": 0,
            "ID_Incorporacao": 0,
            "Classificacao_Centro_Custo": "string",
            "Valor": 0,
            "Perc_IPI": 0,
            "Perc_Base_ICMS": 0,
            "Perc_ICMS": 0,
            "CFOP": "string",
            "Situacao_Tributaria": "string",
            "Observacao_Item_Nota": "string",
            "Observacao_Patrimonio": "string",
            "Setor_Enviado": 0
          }
        ],
        "Titulo_Parcelas_Duplicatas": [
          {
            "Tipo": 0,
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Contabil": 0
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