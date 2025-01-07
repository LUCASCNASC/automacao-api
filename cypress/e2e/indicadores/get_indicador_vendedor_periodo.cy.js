// /v3/indicador_vendedor_periodo/{datainicial}/{datafinal} - Indicadores do Vendedor por Período
// Indicadores do vendedor por período

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const datainicial= ""; //string - OBRIGATÓRIO
const datafinal= ""; //string - OBRIGATÓRIO

describe('Indicadores - GET - /v3/indicador_vendedor_periodo/{datainicial}/{datafinal}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Indicadores/v3_indicador_vendedor_periodo/${datainicial}/${datafinal}`, 
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