// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pedido/v3_gerente_filial', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });