// /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal} - Lista Mapa Carga Loja em lote
// Retorna uma lista com os mapas de carga loja na situação(1 - A Carregar), de acordo com o preenchimento dos parâmetros de entrada:

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - GET - /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal}', () => {
    const url = '/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_loja_lote';
    const token = acess_token

    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCargaLojaInicial: "",
        idMapaCargaLojaFinal: ""
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