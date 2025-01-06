// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

import reqBody_get_parametros_sitema from '../../fixtures/sistema/get_parametros_sitema.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Sistema - GET - /v3/parametros_sitema', () => {
  const url = '/Sistema/v2_sistema_parametro_sistema';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_parametros_sitema,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('usaintencaocompra');
          expect(resposta.body.retorno[0]).toHaveProperty('usaposvenda');
          expect(resposta.body.retorno[0]).toHaveProperty('maximodiasprevisaoentrega');
          expect(resposta.body.retorno[0]).toHaveProperty('visualizarmgc');
          expect(resposta.body.retorno[0]).toHaveProperty('maximodiaspropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('url_ecommerce');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuarioremetente');
          expect(resposta.body.retorno[0]).toHaveProperty('trialremoverinfocomplementarcadastrocliente');
          expect(resposta.body.retorno[0]).toHaveProperty('trialremoveranexocadastrocliente');
        });
    });
  });