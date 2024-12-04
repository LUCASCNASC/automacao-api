// /v3/estado - Estados
// Listar de estados

describe('Diversos - GET - /v3/estado', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        "uf_codigo": "string",
        "uf_nome": "string"
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_estado', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });