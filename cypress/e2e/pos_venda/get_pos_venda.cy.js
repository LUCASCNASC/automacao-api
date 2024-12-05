// /v3/pos_venda - Pós-venda
// Listas de pós-venda

import acess_token from '../../fixtures/token.json'

describe('Pós-venda - GET - /v3/pos_venda', () => {
  const url = '/P%C3%B3s-venda/v3_pos_venda_get_post1';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        datainicial: "",
        datafinal: ""
      }

      cy.request({
        mehtod: 'GET', 
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