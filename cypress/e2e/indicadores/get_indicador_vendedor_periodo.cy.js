// /v3/indicador_vendedor_periodo/{datainicial}/{datafinal} - Indicadores do Vendedor por Período
// Indicadores do vendedor por período

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Indicadores - GET - /v3/indicador_vendedor_periodo/{datainicial}/{datafinal}', () => {
  const url = '/Indicadores/v3_indicador_vendedor_periodo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        datainicial: "",
        datafinal: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('ordemexibicao');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoindicador');
          expect(resposta.body.retorno[0].dados[0]).toHaveProperty('valor');
        });
    });
  });