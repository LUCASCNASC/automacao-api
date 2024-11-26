// /v3/pos_venda_Historico/{codigo} - histórico Pós-venda
// listas de históricos da pós-venda

describe('Pós-venda - GET - /v3/pos_venda_Historico/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v2_pos_venda_Historico';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pos_venda_Historico/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });