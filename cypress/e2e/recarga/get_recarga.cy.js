// /v3/recarga/{idFilial}/{idItemServico} - Dados Recarga Efetuada
// Retorna os dados da recarga efetuada

describe('Recarga - GET - /v3/recarga/{idFilial}/{idItemServico}', () => {
    const token = Cypress.env('AUTH_TOKEN');
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idItemServico: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Recarga/v3_get_recarga', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });