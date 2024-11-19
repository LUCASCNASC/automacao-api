describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_titulo';
  
    it('POST - /v3/baixa_titulo - Resposta 200', () => {
      const requestBody = {
        "titulos": [
            {
                "idfilialbaixa": 10050,
                "idfilial": 10050,
                "idtitulo": 10035,
                "idparcelatitulo": 1,
                "idcobrador": null,
                "formapagamento": {
                    "dinheiro": null,
                    "cheques": [],
                    "cartao": [
                        {
                            "tipo": 5,
                            "nsu": "497500000002",
                            "nsuhost": "497500000002",
                            "autorizacao": "497500000002",
                            "instituicaocartaotef": 0,
                            "bandeira": 0,
                            "operadora": "string",
                            "dadospagamento": {
                                "valorpago": 100.00,
                                "valordesconto": 0,
                                "databaixa": "2024-07-09"
                            }
                        }
                    ],
                    "carteiradigital": [],
                    "encontrodecontas": null
                }
            }
        ],
        "movimentostef": []
    }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });