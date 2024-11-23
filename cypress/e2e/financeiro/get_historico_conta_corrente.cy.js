// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_historicocontacorrente';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/historico_conta_corrente/{idTipoContaCorrente} - Resposta 200', () => {
      const requestBody = {
        idTipoContaCorrente: "",
        idContaCorrente: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });