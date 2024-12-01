// /v3/configuracao_recarga - Servico para recarga TEF
// Retorna o serviço e as formas de pagamento configurados para recarga de celular via TEF

describe('Recarga - GET - /v3/configuracao_recarga', () => {
    const token = Cypress.env('AUTH_TOKEN');
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: '/Recarga/v3_configuracao_recarga', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });