// /v3/gravar_mapa_carga_coletado - Altera a situação do mapa de carga cliente/loja para Coletado
// Finaliza a coleta do mapa de carga e/ou atualiza os itens coletados

import reqBody_post_gravar_mapa_carga_coletado from '../../fixtures/logistica/post_gravar_mapa_carga_coletado.json'

describe('Logística - POST - /v3/gravar_mapa_carga_coletado', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_gravar_mapa_carga_coletado', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gravar_mapa_carga_coletado
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });