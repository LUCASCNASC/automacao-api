// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 

    it('Resposta 200', () => {
      const requestBody = {
        ano: "",
        mes: "",
        dia: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Indicadores/v3_indicador_vendedor', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });