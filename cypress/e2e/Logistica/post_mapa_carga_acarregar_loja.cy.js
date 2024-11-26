// /v3/mapa_carga_acarregar_loja - Carrega mapas de carga loja que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga loja com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado

describe('Logística - POST - /v3/mapa_carga_acarregar_loja', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_mapa_carga_acarregar_loja';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/mapa_carga_acarregar_loja - Resposta 200', () => {
      const requestBody = {
        "id_filial_mapa": 0,
        "id_usuario": 0,
        "tipo_visao_mapa": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });