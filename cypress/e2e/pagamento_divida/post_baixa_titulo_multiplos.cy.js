// /v3/baixa_titulo_multiplos - Baixa multiplas título
// Baixa multiplas título

describe('Financeiro - POST - /v3/baixa_titulo_multiplos', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_titulo_multiplos';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/baixa_titulo_multiplos - Resposta 200', () => {
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
              "cheques": [
                {
                  "dadospagamento": {
                    "valorpago": 0,
                    "valordesconto": 0,
                    "databaixa": "string"
                  }
                }
              ],
              "cartao": [
                {
                  "tipo": 0,
                  "nsu": "string",
                  "nsuhost": "string",
                  "autorizacao": "string",
                  "idinstituicao": 0,
                  "idbandeira": 0,
                  "idoperadora": 0,
                  "dadospagamento": {
                    "valorpago": 0,
                    "valordesconto": 0,
                    "databaixa": "string"
                  }
                }
              ],
              "carteiradigital": [
                {
                  "idtipotef": 0,
                  "idcarteiradigital": "string",
                  "nsu": "string",
                  "nsuhost": "string",
                  "autorizacao": "string",
                  "idprocessobaixa": "string",
                  "dadospagamento": {
                    "valorpago": 0,
                    "valordesconto": 0,
                    "databaixa": "string"
                  }
                }
              ],
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
              "conciliacaobancaria": [
                {
                  "dadospagamento": {
                    "valorpago": 0,
                    "valordesconto": 0,
                    "databaixa": "string"
                  }
                }
              ]
            }
          }
        ],
        "movimentostef": [
          {
            "idfilial": 0,
            "idoperacaotef": 0,
            "transacao": 0,
            "operadora": "string",
            "primeiravia": "string",
            "segundavia": "string",
            "nsu": "string",
            "nsuhost": "string",
            "bandeiracartaotef": 0,
            "tipocarteiraoperadoratef": 0,
            "operadoracartaotef": 0,
            "codigoautorizacaocredito": "string",
            "codigoinstituicao": "string",
            "instituicaocartaotef": 0,
            "processooperadoratef": 0,
            "modalidadepagamentotef": "string",
            "idterminalcaixa": 0,
            "valortotal": 0,
            "datamovimento": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });