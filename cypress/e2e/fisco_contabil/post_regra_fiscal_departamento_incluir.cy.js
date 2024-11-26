// /v3/regra_fiscal_departamento_incluir - Inclusão de base fiscal (departamento)
// Incluir base fiscal de departamento

describe('Fisco/Contábil - POST - /v3/regra_fiscal_departamento_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_departamento_post';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/regra_fiscal_departamento_incluir - Resposta 200', () => {
      const requestBody = {
        "Id_Grupo": 0,
        "UF": "string",
        "Id_Departamento_Inicial": 0,
        "Id_Departamento_Final": 0,
        "Id_Codigo_Fiscal": 0,
        "Id_Tipo_Imposto": 0,
        "Id_Tipo_Contribuinte": 0,
        "Id_Situacao_Tributaria": "string",
        "Id_Observacao_Fiscal": 0,
        "Percentual_Base": 0,
        "Aliquota": 0,
        "Base_Substituicao": 0,
        "Aliquota_Substituicao": 0,
        "Zerar_Livro": true,
        "Id_CFOP_Substituicao": 0,
        "Percentual_Diferido": 0,
        "Somar_Substituicao_Nota": true,
        "Id_Usuario": 0,
        "Data_Hora_Alteracao": "string",
        "Percentual_Desconto_Nota": 0,
        "Id_Natureza_Receita": 0,
        "Base_Substituicao_Sem_Reducao": 0,
        "Id_Codigo_NBM_Subst": 0,
        "Valor_Minimo_Base": 0,
        "Valor_Maximo_Base": 0,
        "Id_Base_Fiscal_Departamento": 0,
        "Data_Inicial": "string",
        "Aliquota_Importacao": 0,
        "Teto_Maximo": 0,
        "Somar_Frete_FOB_BaseST": true,
        "Nao_Somar_Substituicao_No_Custo_Entrada": true,
        "Aliquota_UF_Destino": 0,
        "Percentual_Base_UF_Destino": 0,
        "Percentual_Partilha_UF_Destino": 0,
        "Id_Enquadramento_IPI": 0,
        "Desoneracao": true,
        "Id_Motivo_Desoneracao": 0,
        "Id_Situacao_Origem": 0,
        "Percentual_Reducao_BaseST": 0,
        "Registra_Desconto_ICMS": true,
        "Id_Consumo_Final": 0,
        "Deducao_Base_Calculo_Impostos": "string",
        "Id_Tipo_Calculo_Difal": 0,
        "Area_Livre_Comercio": true,
        "Id_Tabela_Ajuste_Apuracao_Imposto_ICMS": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_ICMSST": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_Difal_Destino": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_FCP_UF_Destino": 0,
        "Vlr_Ajuste_Igual_Vlr_Imposto": true,
        "Aliquota_FCP": 0,
        "Aliquota_FCP_UF_Destino": 0,
        "Aliquota_FCP_ST": 0,
        "Deduzir_ICMS_BC": true,
        "Id_Tabela_Ajuste_Apuracao_Imposto_FCP": 0,
        "Id_Tipo_Calculo_Difal_ST": 0,
        "Id_Tabela_Ajuste_Apuracao_Imposto_FCP_ST": 0,
        "Aliquota_Interestadual": 0,
        "Id_Tipo_Pessoa": 0,
        "Id_Motivo_Restituicao_Complementacao_ICMS": 0,
        "Id_Tipo_Remetente_Retencao": 0,
        "Percentual_Deducao_ICMS_Proprio": 0,
        "Somar_Frete_FOB_Base_ICMS": true,
        "Id_Tipo_Calculo_Diferimento": 0,
        "Data_Final": "string",
        "Deduzir_ICMS_ST_BC": true,
        "Deduzir_IPI_BC": true,
        "Deduzir_Difal_Base": true
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });