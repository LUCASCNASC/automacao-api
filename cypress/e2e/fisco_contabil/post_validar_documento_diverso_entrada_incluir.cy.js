// /v3/validar_documento_diverso_entrada_incluir/ - Valida inclusão de documento diverso (entrada)
// Validar inclusão de documento diverso de entrada

describe('Fisco/Contábil - POST - /v3/validar_documento_diverso_entrada_incluir/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_validar_documento_diverso_entrada_incluir';
  
    it('POST - /v3/validar_documento_diverso_entrada_incluir/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });