// /v3/conhecimento_nota_saida_incluir/ - Inclusão de conhecimento de nota de saída (Apenas registro)
// Incluir conhecimento de nota de saída. Efetua apenas o registro do documento, não efetua a comunicação com a Sefaz

describe('Fisco/Contábil - POST - /v3/conhecimento_nota_saida_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_conhecimento_nota_saida_incluir';
  
    it('POST - /v3/conhecimento_nota_saida_incluir/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });