// /v3/previsao_entrega_mapa_carga_cliente - Lista os mapas com as datas disponíveis de previsão de entrega
// Serão listados os próximos mapas com a data de previsão de entrega maior ou igual a data de faturamento informada, validando a rota, cubagem e o peso do mapa de carga.
//200 - OK
//204 - Sem dados de retorno
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/previsao_entrega_mapa_carga_cliente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => { 

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Logística/v3_post_previsao_entrega_mapa_carga_cliente`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idMapaCarga');
          expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoEntrega');
          expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoMontagem');
          expect(resposta.body.retorno[0]).toHaveProperty('pesoDisponivel');
          expect(resposta.body.retorno[0]).toHaveProperty('volumeDisponivel');
        });
    });
  });