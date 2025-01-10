
// /v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota} - Calcula impostos da nota fiscal
// Calcular impostos da nota fiscal
//204 - Sem dados de retorno
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const Filial = ""; //integer - OBRIGATÓRIO
const RegistroNota = ""; //integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Fisco/Contabil/v3_nota_fiscal_calcular_imposto/${Filial}/${RegistroNota}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Filial');
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Registro_Nota');
          expect(resposta.body.retorno[0]).toHaveProperty('Status');
          expect(resposta.body.retorno[0]).toHaveProperty('Erros');
          expect(resposta.body.retorno[0]).toHaveProperty('Trial');
        });
    });
  });