// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const ano = ""; //number - OBRIGATÓRIO
const mes = ""; //number - OBRIGATÓRIO
const dia = ""; //number - OBRIGATÓRIO

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', { env: { hideCredendials: true } }
  , () => {

    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Indicadores/v3_indicador_vendedor/${ano}/${mes}/${dia}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('ordemexibicao');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoindicador');
          expect(resposta.body.retorno[0].dados[0]).toHaveProperty('valor');
        });
    });
  });