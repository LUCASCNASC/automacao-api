// /v3/carregar_itens_nota_transferida_coletor - Carregar itens notas a receber transferidas
// Carregar itens notas a receber transferidas com as quantidades e produtos a serem coletados

import reqBody_post_carregar_itens_nota_transferida_coletor from '../../fixtures/logistica/post_carregar_itens_nota_transferida_coletor.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', () => {
  const url = '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_carregar_itens_nota_transferida_coletor,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });