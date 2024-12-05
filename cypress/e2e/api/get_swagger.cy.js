// /api/swagger - Swagger
// JSON com informações para criar pagina swagger

import acess_token from '../../fixtures/token.json'

describe('API - GET - /api/swagger', () => {
  const url = '/API/api_swagger';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        versao: ""
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