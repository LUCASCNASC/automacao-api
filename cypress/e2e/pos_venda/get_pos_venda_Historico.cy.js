// /v3/pos_venda_Historico/{codigo} - histórico Pós-venda
// listas de históricos da pós-venda

describe('Pós-venda - GET - /v3/pos_venda_Historico/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/P%C3%B3s-venda/v2_pos_venda_Historico', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });