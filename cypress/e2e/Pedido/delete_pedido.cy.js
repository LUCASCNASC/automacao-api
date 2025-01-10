// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO
const idfilial = ""; //number - OBRIGATÓRIO

describe('Pedido - DELETE - /v3/pedido/{codigo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Pedido/v2_pedido_get_delete2/${codigo}/${idfilial}`, 
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