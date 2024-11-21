// /v3/baixa_titulo - Baixa título
// Baixa título

describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_titulo';
  
    it('POST - /v3/baixa_titulo - Resposta 200', () => {
      const requestBody = {
        "titulos": [
         {
           "idfilialbaixa": 10050,
           "idfilial": 10050,
           "idtitulo": 13923,
           "idparcelatitulo": 1,
           "idcobrador": 0,
           "formapagamento": {
             "dinheiro": {
               "dadospagamento": {
                 "valorpago": 100.00,
                 "valordesconto": 0,
                 "databaixa": "2024-11-18"
               }
              }
           }
         }
       ]
     }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });