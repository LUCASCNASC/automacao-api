// /v3/executar_filtro - Dados de retorno do filtro
// De acordo com o filtro informado é retornado o resultado conforme cadastro

import reqBody_post_executar_filtro from '../../fixtures/sistema/post_executar_filtro.json'
import acess_token from '../../fixtures/token.json'

describe('Sistema - POST - /v3/executar_filtro', () => {
  const url = '/Sistema/v2_sistema_executar_filtro';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_executar_filtro,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });