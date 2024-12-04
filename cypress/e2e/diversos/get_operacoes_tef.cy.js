// /v3/operacoes_tef - Operacões TEF
// Retorna as operações tef configuradas

describe('Diversos - GET - /v3/operacoes_tef', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: '/Diversos/v3_diversos_operacoes_tef', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });