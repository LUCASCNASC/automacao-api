// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Proposta%20crédito/v2_proposta_credito_situacao/${codigo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idmensagempadraopropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('mensagem');
        });
    });
  });