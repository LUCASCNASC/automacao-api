// /v3/mapa_carga_acarregar_cliente - Carrega mapas de carga cliente que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga cliente com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado

describe('Logística - POST - /v3/mapa_carga_acarregar_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_mapa_carga_acarregar_cliente';
  
    it('POST - /v3/mapa_carga_acarregar_cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });