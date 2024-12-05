// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

import reqBody_get_parametros_sitema from '../../fixtures/sistema/get_parametros_sitema.json'
import acess_token from '../../fixtures/token.json'

describe('Sistema - GET - /v3/parametros_sitema', () => {
  const url = '/Sistema/v2_sistema_parametro_sistema';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: url,
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_parametros_sitema,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });