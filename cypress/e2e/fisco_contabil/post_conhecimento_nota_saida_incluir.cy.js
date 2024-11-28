// /v3/conhecimento_nota_saida_incluir/ - Inclusão de conhecimento de nota de saída (Apenas registro)
// Incluir conhecimento de nota de saída. Efetua apenas o registro do documento, não efetua a comunicação com a Sefaz

describe('Fisco/Contábil - POST - /v3/conhecimento_nota_saida_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/conhecimento_nota_saida_incluir/ - Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial": "01001001000101",
        "CNPJ_CPF_Tomador": "01001001000101 ou 00100100101",
        "Processo_Mestre": 0,
        "Data_Emissao": "string",
        "Data_Movimento": "string",
        "Numero_Documento": "string",
        "Numero_Serie": "string",
        "Tipo_Documento_Fiscal": 0,
        "Numero_Observacao_Fiscal": 0,
        "Total_Documento": 0,
        "Total_NotasCF": 0,
        "CNPJ_CPF_Destino": "01001001000101 ou 00100100101",
        "CNPJ_CPF_Remetente": "01001001000101 ou 00100100101",
        "Forma_Pagamento": 0,
        "Chave_NFe": "string",
        "XMLNota_Base64": "string",
        "Parcelas": [
          {
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Parcela": 0,
            "Valor_Juros_Multa": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_conhecimento_nota_saida_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });