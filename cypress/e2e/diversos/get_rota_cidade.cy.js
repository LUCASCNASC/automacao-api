// /v3/rota_cidade - Rota Cidade
// Listar rotas por cidade

describe('Diversos - GET - /v3/rota_cidade', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        idgruporota: "",
        idrota: "",
        idrotacidade: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v3_diversos_rota_cidade',
        headers: { Authorization: `Bearer ${token}` }, 
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });