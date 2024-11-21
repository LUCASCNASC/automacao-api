// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

describe('Sistema - GET - /v3/parametros_sitema', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_parametro_sistema';
  
    it('GET - /v3/parametros_sitema - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });