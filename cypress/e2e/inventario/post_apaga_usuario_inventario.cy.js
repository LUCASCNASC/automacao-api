// /v3/apaga_usuario_inventario/{idFilial}/{idInventario} - Apaga o usuário do inventário
// Apaga o usuário do inventário se não existir nenhuma contagem existente.

describe('Inventário - POST - /v3/apaga_usuario_inventario/{idFilial}/{idInventario}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'POST', 
        url: '/Invent%C3%A1rio/v3_post_apaga_usuario_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });