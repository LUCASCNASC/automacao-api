// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/movimento_assistencia_incluir/ - Resposta 200', () => {
      const requestBody = {
        "ID_Empresa": 0,
        "Numero_Filial": 0,
        "ID_Processo": 0,
        "ID_Local_Saldo": 0,
        "Para_Da_Filial": 0,
        "CNPJ_CPF": "string",
        "Carregar_Assistencia_Remota": true,
        "NFE_XML_Base64": "string",
        "Gerar_Nota_Entrada": true,
        "Numero_Nota": 0,
        "Serie": "string",
        "Data_Emissao": "string",
        "Data_Saida": "string",
        "ID_Tipo_Documento_Fiscal": 0,
        "ID_Chave_Sefaz": "string",
        "Total_Nota": 0,
        "ID_Motorista": 0,
        "ID_Veiculo": 0,
        "ID_Tipo_Frete": 0,
        "Dados_Adicionais": "string",
        "Assistencia": [
          {
            "Filial_Origem": 0,
            "ID_Assistencia": 0,
            "Valor_Produto": 0,
            "Historico": "string",
            "GTIN": "string",
            "Numero_Serial": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
        url: '/Assistencia/v3_post_movimento_assistencia_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });