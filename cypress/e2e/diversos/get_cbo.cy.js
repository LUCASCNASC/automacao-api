// /v3/cbo - CBO
// Lista dos CBOs

import acess_token from '../../fixtures/token.json'

describe('Diversos - GET -/v3/cbo', () => {
  const url = '/Diversos/v2_diversos_cbo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        termo: "",
        limit: "",
        offset: "",
        sort: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
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