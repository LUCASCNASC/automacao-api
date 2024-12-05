// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Lista de Filial
// Retorna uma lista das filiais de acordo com os parâmetros informados

import acess_token from '../../fixtures/token.json'

describe('Filial - GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', () => {
  const url = '/Filial/v3_get_filial_por_tipo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        UF: "",
        Municipio: "",
        Tipo: ""
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