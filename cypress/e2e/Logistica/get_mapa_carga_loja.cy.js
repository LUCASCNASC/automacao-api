// /v3/mapa_carga_loja/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal} - Lista Mapa Carga Loja
// Retorna uma lista com os mapas de carga loja, de acordo com o preenchimento dos parâmetros de entrada:

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idSituacaoMapaCarga = ""; //integer - OBRIGATÓRIO
const dataInicial = ""; //dataFinal - OBRIGATÓRIO
const dataFinal = ""; //dataFinal - OBRIGATÓRIO

describe('Logística - GET - /v3/mapa_carga_loja/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Logística/v3_get_logistica_lista_mapa_carga_loja/${idFilial}/${idSituacaoMapaCarga}/${dataInicial}/${dataFinal}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('idmapacargaloja');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('totalkg');
          expect(resposta.body.retorno[0]).toHaveProperty('totalm3');
          expect(resposta.body.retorno[0]).toHaveProperty('totalvalor');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdeitens');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialdestino');
          expect(resposta.body.retorno[0]).toHaveProperty('dataprevisaoentrega');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuariocoletando');
          expect(resposta.body.retorno[0]).toHaveProperty('idveiculo');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idpedidoloja');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idsituacaopedidoloja');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('descricaosituacaopedidoloja');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('databaixa');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idtipourgenciareserva');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('descricaotipourgenciareserva');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idusuario');
        });
    });
  });