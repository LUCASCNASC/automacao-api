// /v3/lancamento_conta_corrente - Inclusão de lançamento conta corrente
// Incluir lançamento de conta corrente no financeiro. Necessário ter preenchido os campos: idFilial, idContaCorrente e idHistoricoContaCorrente

import reqBody_post_lancamento_conta_corrente from '../../fixtures/financeiro/post_lancamento_conta_corrente..json'

describe('Financeiro - POST - /v3/lancamento_conta_corrente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_lancamento_conta_corrente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_lancamento_conta_corrente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });