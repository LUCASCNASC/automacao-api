// /v3/mapa_carga_update_item_coletado - Atualizar quantidade coletada
// Atualizar quantidade coletada mapa de carga por item

describe('Logística - POST - /v3/mapa_carga_update_item_coletado', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_mapa_carga_update_item_coletado';
  
    it('POST - /v3/mapa_carga_update_item_coletado - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });