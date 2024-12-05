// /v3/previsao_entrega_mapa_carga_cliente - Lista os mapas com as datas disponíveis de previsão de entrega
// Serão listados os próximos mapas com a data de previsão de entrega maior ou igual a data de faturamento informada, validando a rota, cubagem e o peso do mapa de carga.

import reqBody_post_previsao_entrega_mapa_carga_cliente from '../../fixtures/logistica/post_previsao_entrega_mapa_carga_cliente.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - POST - /v3/previsao_entrega_mapa_carga_cliente', () => {
  const url = '/Log%C3%ADstica/v3_post_previsao_entrega_mapa_carga_cliente';
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
        body: reqBody_post_previsao_entrega_mapa_carga_cliente,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });