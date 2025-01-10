// /v3/regra_fiscal_diversas_alterar - Alteração de base fiscal (diversas)
// Alterar base fiscal diversas
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/regra_fiscal_diversas_alterar', { env: { hideCredendials: true } }, () => {
  
    it('PUT - /v3/regra_fiscal_diversas_alterar - Resposta 200', () => {

      cy.api({
        method: 'PUT', 
        url: `${API_URL}/Fisco/Contabil/v3_regra_fiscal_diversas_put`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalDiversas');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });