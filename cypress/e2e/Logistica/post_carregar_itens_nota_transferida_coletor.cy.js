// /v3/carregar_itens_nota_transferida_coletor - Carregar itens notas a receber transferidas
// Carregar itens notas a receber transferidas com as quantidades e produtos a serem coletados

import reqBody_post_carregar_itens_nota_transferida_coletor from '../../fixtures/logistica/post_carregar_itens_nota_transferida_coletor.json'

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_carregar_itens_nota_transferida_coletor
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });