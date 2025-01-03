// /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF} - Lista de notas fiscais
// Retornar lista das notas fiscais consultadas

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - GET - /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF}', () => {
  const url = '/Fisco/Contabil/v3_nota_fiscal_lista';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        Filial: "",
        Registro_Nota: "",
        Data_Inicial: "",
        Data_Final: "",
        CNPJ_CPF: ""
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
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idregistronota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtipofrete');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idusuario');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idoperacao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idprocesso');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idprocessomestre');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idsituacaonota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idcnpj_cpf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtipodocumentofiscal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtiponumeracao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('uf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idobservacaofiscal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idmotorista');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idecf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('iddescarga');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idfilialorigem');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idfilialdestino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('numeronota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('serie');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('referentecupom');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('datamovimento');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('dataemissao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('cce_rg');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalfrete');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalseguro');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalfinanceiro');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totaldesconto');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalproduto');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalnota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totaloutras');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totaldespesas');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totalnotascf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('datasaida');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idveiculo');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('volume');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idsituacaoentrega');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idpessoabasefiscal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('quantidadereimpressao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idnfesefaz');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('mensagemsefaz');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idsituacaonotasefaz');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idprotocoloautorizacaonfe');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('dataautorizacaosefaz');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idprotocolodpecnfe');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totaldespesasnaotributada');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('chavemd5');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('totaldeducaoiss');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idpessoaremetente');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idregistronotareferenciada');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('placa');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('horaemissao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idvolumeespecie');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('horasaida');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtiporateiofrete');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('cfc');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idprotocolomde');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('emailnfe');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('pinemitido');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('consumofinal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('numeronfsubstituida');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('cadastronacionalobras');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idindicativoprestacaoservicoreinf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idclassificacaoservicoprestadoreinf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtiporepassereinf');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idtipocontribuinte');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('peso');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('idservicoprestado');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idenderecobase');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idregistronota');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idpedidovenda');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idcidade');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('endereco');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('complemento');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('caixapostal');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idrotacidade');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('cidade');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('iditemservico');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idfilialafaturar');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idautorizacaodevolucao');
          expect(resposta.body.retorno[0].notasfiscais[0].endereco[0]).toHaveProperty('idcnpj_cpf');
          expect(resposta.body.retorno[0].notasfiscais[0].impostos[0]).toHaveProperty('tipoimposto');
          expect(resposta.body.retorno[0].notasfiscais[0].impostos[0]).toHaveProperty('valorbasecalculo');
          expect(resposta.body.retorno[0].notasfiscais[0].impostos[0]).toHaveProperty('aliquota');
          expect(resposta.body.retorno[0].notasfiscais[0].impostos[0]).toHaveProperty('valorimposto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idbenspatrimonio');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idincorporacao');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idoperacaoproduto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idcodigonbm');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('valorunitario');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('totalitem');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('totaldespesasacessorias');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idcodigofiscal');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('totaldescontofiscal');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('totalfreteedespesa');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('gtin');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('valorbasecalculo_icms');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('percentualbasecalculo_icms');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquota_icms');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('idsituacaotributaria');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquota_ipi');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('basecalculo_icmssubstituto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('valor_icmssubstituto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquota_icmssubstituto');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquota_pis');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('id_aliquota_cofinsibge');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquotaicmsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('baseicmsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('valoricmsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('aliquotaicmssubsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('baseicmssubsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].produtos[0]).toHaveProperty('valoricmssubsapropriar');
          expect(resposta.body.retorno[0].notasfiscais[0].titulos[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0].notasfiscais[0].titulos[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0].notasfiscais[0].titulos[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0].notasfiscais[0].titulos[0]).toHaveProperty('valorcontabil');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('observacaonota');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('idguianacionalrecolhimento');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('numerodocumento');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('autenticacaobancaria');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('modelodocumento');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('datapagamento');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('idobservacaofiscal');
          expect(resposta.body.retorno[0].notasfiscais[0].guianacionalrecolhimento[0]).toHaveProperty('valordocumento');

        });
    });
  });