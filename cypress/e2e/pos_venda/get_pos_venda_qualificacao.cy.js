// /v3/pos_venda_qualificacao - Qualificações Pós-venda
// listas de qualificações da pós-venda

import acess_token from '../../fixtures/token.json'

describe('Pós-venda - GET - /v3/pos_venda_qualificacao', () => {
  const url = '/P%C3%B3s-venda/v2_pos_venda_qualificacao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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