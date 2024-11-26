// /v3/regra_fiscal_uf_alterar - Alteração de base fiscal (UF)
// Alterar base fiscal de UF

describe('Financeiro - PUT - /v3/regra_fiscal_uf_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_uf_put';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('PUT - /v3/regra_fiscal_uf_alterar - Resposta 200', () => {
      const requestBody = {
        "UF_Origem": "string",
        "UF_Destino": "string",
        "Id_Tipo_Imposto": 0,
        "Aliquota": 0,
        "Percentual_Base": 0,
        "Zerar_Livro": true,
        "Percentual_Diferido": 0,
        "Id_Usuario": 0,
        "Data_Hora_Alteracao": "string",
        "Id_Base_Fiscal_UF": 0,
        "Id_Empresa": 0,
        "Data_Inicial": "string",
        "Desoneracao": true,
        "Id_Motivo_Desoneracao": 0,
        "Id_Situacao_Origem": 0,
        "Id_Situacao_Tributaria": "string",
        "Id_Tipo_Pessoa": 0,
        "Id_Tipo_Calculo_Diferimento": 0,
        "Data_Final": "string"
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
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