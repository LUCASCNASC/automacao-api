// /v3/mapa_carga_acarregar_cliente - Carrega mapas de carga cliente que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga cliente com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado

import reqBody_post_mapa_carga_acarregar_cliente from '../../fixtures/logistica/post_mapa_carga_acarregar_cliente.json'

describe('Logística - POST - /v3/mapa_carga_acarregar_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_mapa_carga_acarregar_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });