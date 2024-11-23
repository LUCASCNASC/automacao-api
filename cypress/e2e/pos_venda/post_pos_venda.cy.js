// /v3/pos_venda - Pós-venda
// Incluir contato de pós-venda

describe('Pós-venda - POST - /v3/pos_venda', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v3_pos_venda_get_post2';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pos_venda - Resposta 200', () => {
      const requestBody = {
        "idPosVenda": 0,
        "observacao": "string",
        "idQualificacao": 0,
        "finalizar": true,
        "dataAgendamento": "string",
        "pesquisaSatisfacao": [
          {
            "idPesquisaSatisfacao": 0,
            "idGrauSatisfacao": "1 - Muito insatisfeito, 2 - Insatisfeito, 3 - Indiferente, 4 - Satisfeito, 5 - Muito satisfeito"
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