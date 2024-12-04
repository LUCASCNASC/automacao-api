// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

import reqBody_get_parametros_sitema from '../../fixtures/sistema/get_parametros_sitema.json'

describe('Sistema - GET - /v3/parametros_sitema', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: '/Sistema/v2_sistema_parametro_sistema',
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_parametros_sitema
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });