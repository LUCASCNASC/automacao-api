// /v3/proposta_credito/{data_inicial} - Proposta crédito
// Lista proposta de crédito

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Proposta crédito - GET - /v3/proposta_credito/{data_inicial}', () => {
  const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        data_inicial: "",
        vendedor: "",
        cliente: "",
        limit: "",
        offset: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('size');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('item');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('nomeCliente');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('dataHoraUltimaAtualizacao');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('entidadeFinanceira');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('tempoDecorrido');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('pedidoVenda');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('propostaCredito');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('vendedor');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('analista');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('situacaoProposta');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('autorizacaoFinanceira');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('numeroFinanceira');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('totalPedido');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('negadoPor');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('filial');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idSituacaoProposta');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('processoVenda');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('processoAReceber');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('cliente');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idVendedor');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('quantidadeParcelas');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('idEntidadeFinanceira');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('situacaoPedidoVenda');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('vencimentosPedidoVenda');
          expect(resposta.body.retorno[0].data[0]).toHaveProperty('Fiador');
          expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('dataInicial');
          expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('dataFim');
          expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('usuario');
          expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('situacao');
          expect(resposta.body.retorno[0].data[0].historico[0]).toHaveProperty('adicional');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('DescricaoMotivo');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('situacao');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('analista');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('dataAnalise');
          expect(resposta.body.retorno[0].data[0].motivoEnvio[0]).toHaveProperty('ordem');
        });
    });
  });