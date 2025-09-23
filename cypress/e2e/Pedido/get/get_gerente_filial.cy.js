// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pedido/v3_gerente_filial/${idFilial}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idUsuario');
          expect(resposta.body.retorno[0]).toHaveProperty('login');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });