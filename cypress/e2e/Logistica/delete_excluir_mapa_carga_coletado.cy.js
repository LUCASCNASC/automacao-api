// /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga} - Excluir Mapa Carga Coletado de Cliente/Loja
// Exclui o mapa que esta em processo de carga e volta o mesmo para situação a carregar.

import acess_token from '../../fixtures/token.json'

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', () => {
    const url = '/Log%C3%ADstica/v3_delete_mapa_carga_coletado';
    const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCarga: "",
        TipoMapaCarga: ""
      }

      cy.request({
        method: 'DELETE', 
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