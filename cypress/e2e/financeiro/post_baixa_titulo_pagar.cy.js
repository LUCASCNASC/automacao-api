// /v3/baixa_titulo_pagar - Baixa de título (a pagar)
// Baixar títulos a pagar.

describe('Financeiro - POST - /v3/baixa_titulo_pagar', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_baixa_titulo_pagar';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/baixa_titulo_pagar - Resposta 200', () => {
      const requestBody = {
        "titulos": [
          {
            "idfilialbaixa": 0,
            "idfilial": 0,
            "idtitulo": 0,
            "idparcelatitulo": 0,
            "idcobrador": 0,
            "formapagamento": {
              "dinheiro": {
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              },
              "vinculado": {
                "idcnpj_cpf": 0,
                "dataemissao": "string",
                "numerodeparcelas": 0,
                "diasprimeiraparcela": 0,
                "intervalodiasparcelas": 0,
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              },
              "cheques": {
                "banco": "string",
                "agencia": "string",
                "conta": "string",
                "cheque": "string",
                "cmc7": "string",
                "idcnpj_cpf_terceiro": 0,
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              },
              "cartao": {
                "idtipotef": 0,
                "nsu": "string",
                "nsuhost": "string",
                "autorizacao": "string",
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              },
              "carteiradigital": {
                "idtipotef": 0,
                "idcarteiradigital": 0,
                "nsu": "string",
                "nsuhost": "string",
                "autorizacao": "string",
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              },
              "encontrodecontas": {
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                },
                "titulos": [
                  {
                    "idfilial": 0,
                    "idtitulo": 0,
                    "idparcelatitulo": 0
                  }
                ]
              },
              "conciliacaobancaria": {
                "dadospagamento": {
                  "valorpago": 0,
                  "valordesconto": 0,
                  "databaixa": "string"
                }
              }
            }
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