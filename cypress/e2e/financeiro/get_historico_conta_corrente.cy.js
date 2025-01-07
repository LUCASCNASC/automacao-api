// /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idTipoContaCorrente = ""; //number - OBRIGATÓRIO
const idContaCorrente = ""; //number

describe('Financeiro - GET - /v3/historico_conta_corrente/{idTipoContaCorrente}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Financeiro/v3_financeiro_historicocontacorrente/${idTipoContaCorrente}/${idContaCorrente}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idHistoricoContaCorrente');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('idTipoHistorico');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoHistorico');
        });
    });
  });