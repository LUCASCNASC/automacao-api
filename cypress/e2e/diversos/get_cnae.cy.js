// /v3/cnae - CNAE
// Lista dos CNAEs

describe('Diversos - GET - /v3/cnae', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        termo: "",
        limit: "",
        offset: "",
        sort: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_cnae',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });