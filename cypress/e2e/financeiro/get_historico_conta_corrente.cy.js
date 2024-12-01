// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idTipoContaCorrente: "",
        idContaCorrente: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_historicocontacorrente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });