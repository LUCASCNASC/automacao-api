// /v3/nota_incluir/ - Inclusão de nota fiscal
// Incluir nota fiscal, estoque e títulos, com base no XML

describe('Fisco/Contábil - POST - /v3/nota_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_nota_incluir';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/nota_incluir/ - Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial_Nota": "string",
        "CNPJ_CPF_Nota": "string",
        "Processo_Mestre": 0,
        "Processo_Livro": 0,
        "Incluir_Titulos_Nota": true,
        "Data_Movimento": "string",
        "Valor_Frete_FOB_Ratear": 0,
        "Complemento_Imposto": false,
        "XMLNota_Base64": "string",
        "Parcelas": [
          {
            "Numero_Parcela": 0,
            "Data_Vencimento": "string",
            "Valor_Parcela": 0
          }
        ],
        "Produto_Unidade_Medida": [
          {
            "Det_nItem": 0,
            "Multiplicador": 0,
            "Unidade_Convertida": "string"
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