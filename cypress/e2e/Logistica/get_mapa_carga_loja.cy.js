// /v3/mapa_carga_loja/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal} - Lista Mapa Carga Loja
// Retorna uma lista com os mapas de carga loja, de acordo com o preenchimento dos parâmetros de entrada:

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - GET - /v3/mapa_carga_loja/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal}', () => {
  const url = '/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_loja';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idSituacaoMapaCarga: "",
        dataInicial: "",
        dataFinal: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
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