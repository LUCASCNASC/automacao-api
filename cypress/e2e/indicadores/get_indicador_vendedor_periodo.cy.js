// /v3/indicador_vendedor_periodo/{datainicial}/{datafinal} - Indicadores do Vendedor por Período
// Indicadores do vendedor por período

describe('Indicadores - GET - /v3/indicador_vendedor_periodo/{datainicial}/{datafinal}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/indicador_vendedor_periodo/{datainicial}/{datafinal} - Resposta 200', () => {
      const requestBody = {
        datainicial: "",
        datafinal: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Indicadores/v3_indicador_vendedor_periodo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });