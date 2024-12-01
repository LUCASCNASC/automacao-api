// /v3/itens_inventario/{idFilial}/{idInventario} - Itens do Inventário
// Lista os itens do inventários.

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Invent%C3%A1rio/v3_get_itens_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });