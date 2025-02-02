
// /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto} - Lista base fiscal (UF)
// Listar base fiscal de UF
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const UFOrigem = ""; //string - OBRIGATÓRIO
const OrigemProduto = ""; //integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Fisco/Contabil/v3_regra_fiscal_uf_get/${UFOrigem}/${OrigemProduto}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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