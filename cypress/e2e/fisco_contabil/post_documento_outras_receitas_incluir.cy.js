// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/documento_outras_receitas_incluir- Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial": "string",
        "CNPJ_CPF": "string",
        "Processo_Mestre": 0,
        "Conta_Corrente": 0,
        "Data_Emissao": "string",
        "Data_Movimento": "string",
        "Numero_Documento": "string",
        "Numero_Serie": "string",
        "Numero_Observacao_Fiscal": 0,
        "Total_Frete_Despesa": 0,
        "Total_Outras_Diversas": 0,
        "Total_Deducao_ISS": 0,
        "Total_Documento": 0,
        "Observacao": "string",
        "Descricao": "string",
        "Documento_Referenciado": "string",
        "Servico_Realizado_Municipio_Prestador": true,
        "Parcelas": [
          {
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Parcela": 0,
            "Documento": "string"
          }
        ],
        "CentroCustos": [
          {
            "Debito_Credito": "string",
            "Classificacao_Centro_Custo": "string",
            "Valor": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_documento_outras_receitas_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });