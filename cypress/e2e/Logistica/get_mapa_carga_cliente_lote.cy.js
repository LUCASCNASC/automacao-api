// /v3/mapa_carga_cliente_lote/{idFilial}/{idMapaCargaInicial}/{idMapaCargaFinal} - Lista Mapa Carga Cliente em lote
// Retorna uma lista com os mapas de carga cliente na situação(1 - A Carregar), de acordo com o preenchimento dos parâmetros de entrada:

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idMapaCargaInicial = ""; //integer - OBRIGATÓRIO
const idMapaCargaFinal = ""; //integer - OBRIGATÓRIO

describe('Logística - GET - /v3/mapa_carga_cliente_lote/{idFilial}/{idMapaCargaInicial}/{idMapaCargaFinal}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaosituacaomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('datainicial');
          expect(resposta.body.retorno[0]).toHaveProperty('maximokg');
          expect(resposta.body.retorno[0]).toHaveProperty('maximom3');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdecliente');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdepedido');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuariocoletando');
          expect(resposta.body.retorno[0]).toHaveProperty('idmotorista');
          expect(resposta.body.retorno[0]).toHaveProperty('idveiculo');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idfilialafaturar');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idpedidovenda');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('iditembase');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('totalitem');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idsituacaopedidovenda');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('iditembasereferentekit');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('composicaokit');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('previsaofaturamento');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('pesokg');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('volumem3');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('idrotacidade');
          expect(resposta.body.retorno[0].carga[0]).toHaveProperty('ordementrega');
        });
    });
  });