// /v3/executar_filtro - Dados de retorno do filtro
// De acordo com o filtro informado é retornado o resultado conforme cadastro

import reqBody_post_executar_filtro from '../../fixtures/sistema/post_executar_filtro.json'

describe('Sistema - POST - /v3/executar_filtro', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Sistema/v2_sistema_executar_filtro', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_executar_filtro
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });