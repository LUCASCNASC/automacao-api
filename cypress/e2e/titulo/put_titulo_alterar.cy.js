// /v3/titulo_alterar - Alterar Titulo A Receber/Pagar
// Alteracao A Receber/Pagar de Titulo e Parcelas

describe('Titulo - PUT - /v3/titulo_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Titulo/v3_put_titulo_alterar';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('PUT - /v3/titulo_alterar - Resposta 200', () => {
      const requestBody = {
        "Tipo_Titulo": 0,
        "Numero_Empresa": 0,
        "Numero_Filial": 0,
        "Numero_Titulo": 0,
        "Numero_Processo": 0,
        "Numero_CNPJ_CPF": "string",
        "Numero_Vendedor": 0,
        "Data_Emissao_Titulo": "string",
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
        ]
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
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