// /v3/conhecimento_nota_saida_incluir/ - Inclusão de conhecimento de nota de saída (Apenas registro)
// Incluir conhecimento de nota de saída. Efetua apenas o registro do documento, não efetua a comunicação com a Sefaz

import reqBody_post_conhecimento_nota_saida_incluir from '../../fixtures/fisco_contabil/post_conhecimento_nota_saida_incluir.json'

describe('Fisco/Contábil - POST - /v3/conhecimento_nota_saida_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_conhecimento_nota_saida_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_conhecimento_nota_saida_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });