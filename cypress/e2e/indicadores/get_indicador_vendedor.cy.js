// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json

  
    it('GET - /v3/indicador_vendedor/{ano} - Resposta 200', () => {
      const requestBody = {
        ano: "",
        mes: "",
        dia: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Indicadores/v3_indicador_vendedor', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });