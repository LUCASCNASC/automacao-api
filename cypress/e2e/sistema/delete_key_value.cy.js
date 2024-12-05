// /v3/key_value/{key} - Exclui chave e valor
// Excluir um determindo valor pela sua chave

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Sistema - DELETE - /v3/key_value/{key}', () => {
  const url = '/Sistema/v2_sistema_key_value_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        key: ""
      }

      cy.request({
        method: 'DELETE',
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });