// /post_gerar_rateio_centro_custo/ - Consulta NFE
// Consulta NFE
//200 - OK
//201 - Criado
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Fisco/Contabil/v3_post_gerar_rateio_centro_custo`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('IdFilial');
          expect(response.body.retorno[0]).toHaveProperty('IdProcessamento');
        });
    });
  });