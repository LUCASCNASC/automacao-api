// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigoBanco = "" //number - OBRIGATÓRIO
const codigoAgencia = "" //number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Financeiro/v3_financeiro_agencia_delete/${codigoBanco}/${codigoAgencia}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });