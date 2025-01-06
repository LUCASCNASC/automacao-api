// /v3/produto_tipo_saldo_detalhe - Tipo Saldo Detalhe
// Lista de Tipo Saldo Detalhado do Produto

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_tipo_saldo_detalhe ', () => {
  const url = '/Produto/v3_produto_tipo_saldo_detalhe';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilialSaldo: "",
        sku: "",
        idTipoSaldoProduto: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialDestino');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedidoLoja');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoTipoUrgenciaReserva');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoPedidoLoja');
          expect(resposta.body.retorno[0]).toHaveProperty('idMapaCargaLoja');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroFilialFaturar');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeCliente');
          expect(resposta.body.retorno[0]).toHaveProperty('dataInclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoPedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoLocalSaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedidoCompra');
          expect(resposta.body.retorno[0]).toHaveProperty('dataPrevisaoEntrega');
          expect(resposta.body.retorno[0]).toHaveProperty('idRegistroNota');
          expect(resposta.body.retorno[0]).toHaveProperty('dataEmissao');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdeDiasTransito');
          expect(resposta.body.retorno[0]).toHaveProperty('dataSaida');
          expect(resposta.body.retorno[0]).toHaveProperty('totalNota');
          expect(resposta.body.retorno[0]).toHaveProperty('idAssistencia');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoSituacaoAssitencia');
        });
    });
  });