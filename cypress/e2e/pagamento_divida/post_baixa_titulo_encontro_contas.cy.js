// /v3/baixa_titulo_encontro_contas - Baixa título encontro de contas
// Baixa título por encontro de contas

describe('Financeiro - POST - /v3/baixa_titulo_encontro_contas', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/baixa_titulo_encontro_contas - Resposta 200', () => {
      const requestBody = {
        "idfilial": 0,
        "idtitulo": 0,
        "idparcelatitulo": 0,
        "valorpago": "Unknown Type: numeric",
        "valordesconto": "Unknown Type: numeric",
        "idfilialbaixa": 0,
        "databaixa": "string",
        "cheque": {
          "banco": "string",
          "agencia": "string",
          "conta": "string",
          "cheque": "string",
          "cmc7": "string",
          "idcnpj_cpf_terceiro": 0
        },
        "encontrodecontas": [
          {
            "idfilial": 0,
            "idtitulo": 0,
            "idparcelatitulo": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_baixa_titulo_encontro_contas', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });