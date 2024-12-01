// /v3/pos_venda - Pós-venda
// Listas de pós-venda

describe('Pós-venda - GET - /v3/pos_venda', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        datainicial: "",
        datafinal: ""
      }

      cy.request({
        mehtod: 'GET', 
        url: '/P%C3%B3s-venda/v3_pos_venda_get_post1', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });