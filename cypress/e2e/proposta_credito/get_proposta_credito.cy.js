// /v3/proposta_credito/{data_inicial} - Proposta crédito
// Lista proposta de crédito

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const data_inicial = "yyyy-mm-dd"; //string - OBRIGATÓRIO
const vendedor = ""; //number
const cliente = ""; //string
const limit = ""; //string
const offset = ""; //string

describe('Proposta crédito - GET - /v3/proposta_credito/{data_inicial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
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