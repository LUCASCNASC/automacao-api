// /v3/previsao_entrega_mapa_carga_cliente - Lista os mapas com as datas disponíveis de previsão de entrega
// Serão listados os próximos mapas com a data de previsão de entrega maior ou igual a data de faturamento informada, validando a rota, cubagem e o peso do mapa de carga.

describe('Logística - POST - /v3/previsao_entrega_mapa_carga_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_previsao_entrega_mapa_carga_cliente';
  
    it('POST - /v3/previsao_entrega_mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });