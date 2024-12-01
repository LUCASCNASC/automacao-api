// /v3/mapa_carga_acarregar_itens - Carregar o itens do mapa de carga cliente/loja e altera o mapa de carga
// Retorna os itens do mapa de carga com as informações da coleta, atualiza o usuário da coleta para o usuário informado e atualiza a situação do mapa de carga para Em Carga.

import reqBody_post_mapa_carga_acarregar_itens from '../../fixtures/logistica/post_mapa_carga_acarregar_itens.json'

describe('Logística - POST - /v3/mapa_carga_acarregar_itens', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_mapa_carga_acarregar_itens
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });