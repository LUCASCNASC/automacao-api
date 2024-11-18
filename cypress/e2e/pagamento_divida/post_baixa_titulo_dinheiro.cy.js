describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20divida/v2_divida_baixa_titulo';
  
    it('POST - /v3/baixa_titulo - Resposta 200', () => {
      const requestBody = {
        "titulos": [
         {
           "idfilialbaixa": 10050,
           "idfilial": 10050,
           "idtitulo": 10038,
           "idparcelatitulo": 1,
           "idcobrador": 0,
           "formapagamento": {
             "dinheiro": {
               "dadospagamento": {
                 "valorpago": 250.00,
                 "valordesconto": 0,
                 "databaixa": "2024-05-28"
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
        });
    });
  });