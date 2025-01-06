// /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto} - Lista base fiscal (UF)
// Listar base fiscal de UF

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_uf_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
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
          expect(resposta.body.retorno[0]).toHaveProperty('UF_Origem');
          expect(resposta.body.retorno[0]).toHaveProperty('UF_Destino');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Tipo_Imposto');
          expect(resposta.body.retorno[0]).toHaveProperty('Percentual_Base');
          expect(resposta.body.retorno[0]).toHaveProperty('Zerar_Livro');
          expect(resposta.body.retorno[0]).toHaveProperty('Percentual_Diferido');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Usuario');
          expect(resposta.body.retorno[0]).toHaveProperty('Data_Hora_Alteracao');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Base_Fiscal_UF');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Empresa');
          expect(resposta.body.retorno[0]).toHaveProperty('Data_Inicial');
          expect(resposta.body.retorno[0]).toHaveProperty('Desoneracao');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Motivo_Desoneracao');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Situacao_Origem');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Situacao_Tributaria');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Tipo_Pessoa');
          expect(resposta.body.retorno[0]).toHaveProperty('Id_Tipo_Calculo_Diferimento');
          expect(resposta.body.retorno[0]).toHaveProperty('Data_Final');
        });
    });
  });