// /v3/regra_fiscal_cfop_alterar - Alteração de base fiscal (CFOP)
// Alterar base fiscal de CFOP

describe('Financeiro - PUT - /v3/regra_fiscal_cfop_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_cfop_put';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('PUT - /v3/regra_fiscal_cfop_alterar - Resposta 200', () => {
      const requestBody = {
        "UF_Origem": "string",
        "UF_Destino": "string",
        "Id_Codigo_Fiscal": 0,
        "Id_Tipo_Contribuinte": 0,
        "Id_Observacao_Fiscal": 0,
        "Id_Situacao_Tributaria": "string",
        "Aliquota": 0,
        "Percentual_Base": 0,
        "Id_Tipo_Imposto": 0,
        "Zerar_Livro": true,
        "Percentual_Diferido": 0,
        "Valor_Minimo_Base": 0,
        "Id_Usuario": 0,
        "Data_Hora_Alteracao": "string",
        "Percentual_Desconto_Nota": 0,
        "Valor_Maximo_Base": 0,
        "Imposto_Deduzir_IRPF": 0,
        "Id_Base_Fiscal_CFOP": 0,
        "Id_Natureza_Receita": 0,
        "Id_Empresa": 0,
        "Data_Inicial": "string",
        "Teto_Maximo": 0,
        "Aliquota_UF_Destino": 0,
        "Percentual_Base_UF_Destino": 0,
        "Percentual_Partilha_UF_Destino": 0,
        "Id_Enquadramento_IPI": 0,
        "Desoneracao": true,
        "Id_Motivo_Desoneracao": 0,
        "Id_Situacao_Origem": 0,
        "Aliquota_Importacao": 0,
        "Registra_Desconto_ICMS": true,
        "Percentual_Credito_Presumido": 0,
        "Deducao_Base_Calculo_Impostos": "string",
        "Id_Tipo_Calculo_Difal": 0,
        "Area_Livre_Comercio": true,
        "Id_Tabela_Ajuste_Apuracao_Imposto_ICMS": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_FCP": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino": 0,
        "Vlr_Ajuste_Igual_Vlr_Imposto": true,
        "Aliquota_FCP": 0,
        "Aliquota_FCP_UF_Destino": 0,
        "Deduzir_ICMS_BC": true,
        "Aliquota_Interestadual": 0,
        "Id_Tipo_Pessoa": 0,
        "Id_Tipo_Calculo_Diferimento": 0,
        "Data_Final": "string",
        "Deduzir_ICMS_ST_BC": true,
        "Id_Tipo_Contribuinte_Destinatario": 0,
        "UF_Tomador": "string",
        "Deduzir_IPI_BC": true,
        "Deduzir_Difal_Base": true
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
        url, 
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });