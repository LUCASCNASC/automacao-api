// /v3/conhecimento_nota_saida_incluir/ - Inclusão de conhecimento de nota de saída (Apenas registro)
// Incluir conhecimento de nota de saída. Efetua apenas o registro do documento, não efetua a comunicação com a Sefaz

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/conhecimento_nota_saida_incluir/', () => {
  const url = '/Fisco/Contabil/v3_post_conhecimento_nota_saida_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: rurl, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_conhecimento_nota_saida_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });