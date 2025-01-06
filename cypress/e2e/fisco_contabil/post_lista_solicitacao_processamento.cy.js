// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')


describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', () => {
  const url = '/Fisco/Contabil/v3_lista_solicitacao_processamento';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_lista_solicitacao_processamento,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });