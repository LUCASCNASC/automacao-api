// /v3/filial_lista/ - Dados Filial - Retorna uma lista das filiais

import reqBody_get_filial_lista from '../../fixtures/projeto_real_time/get_filial_lista.json'
import acess_token from '../../fixtures/token.json'

describe('Projeto Real Time - GET - /v3/filial_lista/', () => {
  const url ='/Projeto%20Real%20Time';
  const token = acess_token
  
    it('Resposta 200', () => {
      
      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_filial_lista,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });