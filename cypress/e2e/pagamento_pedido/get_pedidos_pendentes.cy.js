// /v3/pedidos_pendentes/{filial} - Pedidos
// Lista pedidos para pagamento

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pagamento pedido - GET - /v3/pedidos_pendentes/{filial}', () => {
  const url = '/Pagamento%20pedido/v3_pag_pedidos_pendentes';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        data: "",
        numeroPedido: "",
        cnpjCpf: "",
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
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('dataInclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('idSituacaoPedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('totalPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeCliente');
          expect(resposta.body.retorno[0]).toHaveProperty('cpfCliente');
          expect(resposta.body.retorno[0]).toHaveProperty('idVendedor');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeVendedor');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('previsaoEntrega');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('previsaoMontagem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('unidade');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('total');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('faturamentoLocal');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('situacao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idLocalSaldo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('pesoBruto');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('volumeCubico');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('tipoUpdateSaldoProduto');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('unidade');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('total');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('faturamentoLocal');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('situacao');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('idLocalSaldo');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('pesoBruto');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('volumeCubico');
          expect(resposta.body.retorno[0].produtos[0].kit[0]).toHaveProperty('tipoUpdateSaldoProduto');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idItemServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('total');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('item');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('valorParcela');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('quantidadeParcelas');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('valorOperacao');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('modalidade');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('processo');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('total');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('possuiPendencia');
          expect(resposta.body.retorno[0]).toHaveProperty('informacoesPendencia');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadeTotalRegistros');
        });
    });
  });