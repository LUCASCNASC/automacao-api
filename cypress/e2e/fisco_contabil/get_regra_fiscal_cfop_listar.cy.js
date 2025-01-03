// /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Lista base fiscal (CFOP)
// Listar base fiscal de CFOP

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_cfop_get';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
        UFDestino: "",
        UFTomador: "",
        OrigemProduto: ""
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
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('UF_Origem');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Codigo_Fiscal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Contribuinte');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Observacao_Fiscal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Situacao_Tributaria');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Base');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Imposto');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Zerar_Livro');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Diferido');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Valor_Minimo_Base');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Usuario');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Data_Hora_Alteracao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Desconto_Nota');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Valor_Maximo_Base');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Imposto_Deduzir_IRPF');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Base_Fiscal_CFOP');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Natureza_Receita');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Empresa');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Data_Inicial');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Teto_Maximo');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota_UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Base_UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Partilha_UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Enquadramento_IPI');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Desoneracao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Motivo_Desoneracao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Situacao_Origem');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota_Importacao');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Registra_Desconto_ICMS');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Percentual_Credito_Presumido');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Deducao_Base_Calculo_Impostos');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Calculo_Difal');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Area_Livre_Comercio');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tabela_Ajuste_Apuracao_Imposto_ICMS');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tabela_Ajuste_Apuracao_Imposto_FCP');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Vlr_Ajuste_Igual_Vlr_Imposto');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota_FCP');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota_FCP_UF_Destino');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Deduzir_ICMS_BC');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Aliquota_Interestadual');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Pessoa');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Calculo_Diferimento');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Data_Final');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Deduzir_ICMS_ST_BC');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Id_Tipo_Contribuinte_Destinatario');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('UF_Tomador');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Deduzir_IPI_BC');
          expect(resposta.body.retorno[0].notasfiscais[0]).toHaveProperty('Deduzir_Difal_Base');

        });
    });
  });