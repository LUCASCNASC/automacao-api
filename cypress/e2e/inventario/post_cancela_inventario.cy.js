// /v3/cancela_inventario/{idFilial}/{idInventario} - Cancelar inventário
// Exclui toda a contagem já realizado de um inventário que não esteja finalizado, disponibilizando-o para outros usuários.

describe('Inventário - POST - /v3/cancela_inventario/{idFilial}/{idInventario}', () => {
    const url = 'http://localhost:8091/sabium#/Invent%C3%A1rio/v3_post_cancela_inventario';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/cancela_inventario/{idFilial}/{idInventario} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });