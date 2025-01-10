// /v3/mapa_carga_acarregar_loja - Carrega mapas de carga loja que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga loja com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado
//200 - OK
//204 - Sem dados de retorno

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_acarregar_loja', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Logística/v3_post_mapa_carga_acarregar_loja`, 
        headers: { Authorization },
        
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdeitens');
          expect(resposta.body.retorno[0]).toHaveProperty('filialdetalhe');
          expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('nomemotorista');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });