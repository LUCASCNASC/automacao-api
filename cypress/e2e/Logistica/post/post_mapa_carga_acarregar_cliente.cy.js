// /v3/mapa_carga_acarregar_cliente - Carrega mapas de carga cliente que estão na situação a A Carregar ou Em Carga
// Retorna os mapas de carga cliente com coleta liberada, na situação A Carregar se TipoVisaoMapa for Por Mapa, ou na situação A Carregar e Em Carga se TipoVisaoMapa for Por Usuario e o id do usuário da coleta for igual ao id do usuário informado
//200 - OK
//204 - Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_post_mapa_carga_acarregar_cliente';
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_acarregar_cliente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`, 
        headers: { Authorization },
        
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdecliente');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdepedido');
          expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('nomemotorista');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });