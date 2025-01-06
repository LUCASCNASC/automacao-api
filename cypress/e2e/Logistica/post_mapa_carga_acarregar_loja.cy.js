// /v3/mapa_carga_acarregar_loja - Carrega mapas de carga loja que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga loja com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_acarregar_loja', () => {
  const url = '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_loja';
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
        body: reqBody_post_mapa_carga_acarregar_loja,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });