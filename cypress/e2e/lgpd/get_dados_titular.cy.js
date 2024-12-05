// /v3/dados_titular/{cpf} - Consulta de dados pessoais de titular
// Esse serviço retorna os dados pessoais do titular com base no CPF consultado. Para isso, basta informar o CPF válido do titular que deseja obter essas informações.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Recarga - GET - /v3/dados_titular/{cpf}', () => {
  const url = '/LGPD/v3_get_lgpd_dados_titular';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cpf: ""
      }

      cy.request({
        method: 'GET', 
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