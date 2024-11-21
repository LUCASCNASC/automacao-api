// /v3/mapa_carga_cliente - Dados de Mapa de Carga Cliente
// Incluir/alterar cadastro de mapa de carga cliente

describe('Logística - POST - /v3/mapa_carga_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_mapa_carga_cliente';
  
    it('POST - /v3/mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });