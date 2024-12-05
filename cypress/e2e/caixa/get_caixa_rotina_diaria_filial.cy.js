// /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Executar rotinas diárias da filial
// Executa rotinas diárias da filial: Exclusão de pedidos e baixa de automática de títulos por perca, de acordo com os parâmetros de dias máximo, configurados em cada filial

import acess_token from '../../fixtures/token.json'

describe('Caixa - GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}', () => {
  const url = '/Caixa/v3_caixa_rotina_diaria_filial_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: '10050',
        dataAbertura: '2024-11-22'
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