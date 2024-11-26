// /v3/titulo_incluir - Incluir Título A Receber/Pagar
// Inclusão A Receber/Pagar de Título, Parcela e Cartão

describe('Titulo - POST - /v3/titulo_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Titulo/v3_post_titulo_incluir';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/titulo_incluir - Resposta 200', () => {
      const requestBody = {
        "Tipo_Titulo": 0,
        "Numero_Empresa": 0,
        "Numero_Filial": 0,
        "Numero_Processo": 0,
        "Numero_CNPJ_CPF": "string",
        "Numero_Vendedor": 0,
        "Data_Emissao_Titulo": "string",
        "Data_Inclusao_Titulo": "string",
        "Documento": "string",
        "Observacao": "string",
        "Contrato_Financeira": "string",
        "Forma_Pagamento": 0,
        "Numero_CNPJ_CPF_Fiador": "string",
        "Titulo_Parcela": [
          {
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Contabil": 0,
            "Valor_Presente": 0,
            "Valor_Futuro": 0,
            "Valor_Comissao": 0,
            "Envia_Spc": true,
            "Documento": "string",
            "Cartao_Fidelidade": "string"
          }
        ],
        "Titulo_Cartao": [
          {
            "Numero_Parcela": 0,
            "Data_Operacao": "string",
            "Numero_Parcela_Cartao": 0,
            "Autorizacao_TEFF": "string",
            "Autorizacao_Operadora": "string",
            "NSU_TEFF": "string",
            "NSU_Operadora": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
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