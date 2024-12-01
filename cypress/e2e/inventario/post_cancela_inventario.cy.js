// /v3/cancela_inventario/{idFilial}/{idInventario} - Cancelar inventário
// Exclui toda a contagem já realizado de um inventário que não esteja finalizado, disponibilizando-o para outros usuários.

describe('Inventário - POST - /v3/cancela_inventario/{idFilial}/{idInventario}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'POST', 
        url: '/Invent%C3%A1rio/v3_post_cancela_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });