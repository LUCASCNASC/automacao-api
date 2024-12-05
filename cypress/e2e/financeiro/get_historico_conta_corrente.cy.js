// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente

import acess_token from '../../fixtures/token.json'

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', () => {
  const url = '/Financeiro/v3_financeiro_historicocontacorrente';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idTipoContaCorrente: "",
        idContaCorrente: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });