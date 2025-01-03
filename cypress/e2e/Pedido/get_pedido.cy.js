// /v3/pedido/{codigo} - Pedido Venda
// Dados do pedido de venda

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - GET - /v3/pedido/{codigo}', () => {
  const url = '/Pedido/v2_pedido_get_delete1';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        codigo: "",
        validarsituacaopedido: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('processoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('idFilialSaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeModificado');
          expect(resposta.body.retorno[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0]).toHaveProperty('observacaoPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('cadastroSimplificado');
          expect(resposta.body.retorno[0]).toHaveProperty('consumoFinal');
          expect(resposta.body.retorno[0]).toHaveProperty('chaveMD5');
          expect(resposta.body.retorno[0]).toHaveProperty('identidadetransportadora');
          expect(resposta.body.retorno[0]).toHaveProperty('idtipoorigempedidovenda');
          expect(resposta.body.retorno[0]).toHaveProperty('empresaVendedora');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('idTipoEndereco');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('rua');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('complemento');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('uf');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('local');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('dddTelefone');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('numeroTelefone');

          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('id');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('localFaturamento');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('localSaldo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idVendedor');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idIntencaoCompra');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('habilitarDataEntrega');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('habilitarDataMontagem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('dataEntrega');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('dataMontagem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valorUnitarioOriginal');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('percentualDesconto');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('promocao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('processoPromocaoaVista');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('paginaOrigem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idObservacao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('permiteQtdeFracionada');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('id');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('idItemServico');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('valorUnitarioOriginal');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('idVendedor');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('nomeVendedor');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('idIntencaoCompra');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('cartaoValePresente');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('solicitarTelefone');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('possuiFaixa');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('isentarJurosServico');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('idPedido');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('idRegistroNota');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('idOrigem');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('codigoOrigem');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('nomeOrigem');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].itemOrigem[0]).toHaveProperty('tipoOrigem');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('agregadoAoServicoId');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0]).toHaveProperty('servicoObrigatorio');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].Telefones[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].produtos[0].servicosVinculados[0].Telefones[0]).toHaveProperty('numerotelefone');
          expect(resposta.body.retorno[0].produtos[0].series[0]).toHaveProperty('numeroSerie');
          expect(resposta.body.retorno[0].produtos[0].series[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].produtos[0].series[0]).toHaveProperty('numeroTelefone');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('id');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idItemServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorUnitarioOriginal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idVendedor');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nomeVendedor');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idIntencaoCompra');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('cartaoValePresente');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('solicitarTelefone');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('possuiFaixa');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('isentarJurosServico');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('idPedido');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('idRegistroNota');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('idOrigem');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('codigoOrigem');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('nomeOrigem');
          expect(resposta.body.retorno[0].servicos[0].itemOrigem[0]).toHaveProperty('tipoOrigem');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('agregadoAoServicoId');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('servicoObrigatorio');
          expect(resposta.body.retorno[0].servicos[0].Telefones[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].servicos[0].Telefones[0]).toHaveProperty('numerotelefone');
          expect(resposta.body.retorno[0].frete[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].frete[0]).toHaveProperty('idItemServico');
          expect(resposta.body.retorno[0].frete[0]).toHaveProperty('cobrar');
          expect(resposta.body.retorno[0].frete[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].frete[0]).toHaveProperty('valorOriginal');

          expect(resposta.body.retorno[0].frete[0].rota[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0].frete[0].rota[0].local_entrega[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].frete[0].rota[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].frete[0].rota[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_nome');
        });
    });
  });