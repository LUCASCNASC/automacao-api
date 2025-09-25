// /v3/nota_fiscal/{filial} - Nota fiscal
// Nota fiscal
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = ""; //number - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO
const registro_nota = ""; //number - OBRIGATÓRIO

describe('Pagamento pedido - GET - /v3/nota_fiscal/{filial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Pagamento%20pedido/v2_pag_pedido_nota_fiscal/${filial}/${pedido}/${registro_nota}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
          expect(resposta.body.retorno[0]).toHaveProperty('pdf');
          expect(resposta.body.retorno[0]).toHaveProperty('size');
        });
    });
  });