// /v3/mapa_carga_update_item_coletado - Atualizar quantidade coletada
// Atualizar quantidade coletada mapa de carga por item

describe('Logística - POST - /v3/mapa_carga_update_item_coletado', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/mapa_carga_update_item_coletado - Resposta 200', () => {
      const requestBody = {
        "IdFilialMapa": 0,
        "IdFilialItemBase": 0,
        "IdItemBase": 0,
        "IdPedidoLoja": 0,
        "NumeroVolume": 0,
        "Quantidade": 0
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_update_item_coletado', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });