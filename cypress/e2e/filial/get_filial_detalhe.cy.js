// /v3/filial_detalhe/{filial} - Dados da Filial
// Retorna dados cadastrais da filial.

describe('Filial - GET - /v3/filial_detalhe/{filial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Filial/v2_filial_detalhe', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });