// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idTipoContaCorrente = ""; //number - OBRIGATÓRIO
const idContaCorrente = ""; //number

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idHistoricoContaCorrente');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('idTipoHistorico');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoHistorico');
        });
    });
  });