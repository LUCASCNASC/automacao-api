describe('Pagamento pedido - POST - /v3/baixa_pedido', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_baixa_pedido';
  
    it('POST - /v3/baixa_pedido - Resposta 200', () => {
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