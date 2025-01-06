// /v3/pos_venda_Historico/{codigo} - histórico Pós-venda
// listas de históricos da pós-venda

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pós-venda - GET - /v3/pos_venda_Historico/{codigo}', () => {
  const url = '/P%C3%B3s-venda/v2_pos_venda_Historico';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('id');
          expect(resposta.body.retorno[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('previsaoentrega');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('dataentrega');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('situacaoentrega');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('idmotorista');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('numerotelefone');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('previsaomontagem');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('datamontagem');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('situacaomontagem');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('idmontador');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('numerotelefone');
        });
    });
  });