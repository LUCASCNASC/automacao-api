// /v3/gravar_itens_nota_transferida_coletados - Gravar Itens Nota Recebida Coletados
// Insere e atualiza a tabela de itembase nota transferida com os dados coledatos

import reqBody_post_gravar_itens_nota_transferida_coletados from '../../fixtures/logistica/post_gravar_itens_nota_transferida_coletados.json'

describe('Logística - POST - /v3/gravar_itens_nota_transferida_coletados', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_gravar_itens_nota_transferida_coletados', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gravar_itens_nota_transferida_coletados
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });