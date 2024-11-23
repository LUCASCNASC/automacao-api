// /v3/mapa_carga_acarregar_itens - Carregar o itens do mapa de carga cliente/loja e altera o mapa de carga
// Retorna os itens do mapa de carga com as informações da coleta, atualiza o usuário da coleta para o usuário informado e atualiza a situação do mapa de carga para Em Carga.

describe('Logística - POST - /v3/mapa_carga_acarregar_itens', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/mapa_carga_acarregar_itens - Resposta 200', () => {
      const requestBody = {
        "id_filial_mapa": 0,
        "id_mapa_carga": 0,
        "tipo_mapa_carga": "string",
        "id_usuario": 0
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });