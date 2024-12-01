// /v3/trial - Trial - Lista de trial

describe('Trial - GET - /v3/trial', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        pedido: "",
        vendedor: "",
        limit: "",
        offset: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Trial/v2_trial_get_post1', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });