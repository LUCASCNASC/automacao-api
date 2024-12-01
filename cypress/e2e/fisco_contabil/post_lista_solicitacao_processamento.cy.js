// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento

import reqBody_post_lista_solicitacao_processamento from '../../fixtures/fisco_contabil/post_lista_solicitacao_processamento.json'

describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_lista_solicitacao_processamento', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_lista_solicitacao_processamento
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });