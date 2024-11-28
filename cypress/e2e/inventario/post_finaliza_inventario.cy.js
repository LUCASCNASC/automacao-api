// /v3/finaliza_inventario - Finaliza contagem de inventário pelo aplicativo
// Finaliza a contagem de inventário, podendo ser finalizado definitivo ou não

describe('Inventário - POST - /v3/finaliza_inventario', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/finaliza_inventario - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idInventario": 0,
        "finalizaInventario": 0,
        "itensInventario": [
          {
            "idProduto": 0,
            "idGradeX": 0,
            "idGradeY": 0,
            "saldoInventario": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Invent%C3%A1rio/v3_post_finaliza_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });