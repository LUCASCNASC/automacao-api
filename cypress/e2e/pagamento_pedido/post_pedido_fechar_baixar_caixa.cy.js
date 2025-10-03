// /v3/pedido_fechar_baixar_caixa - Baixar Pedido Caixa
// Fecha o pedido caso necessário, e se forem adicionados itens para baixar efetua a baixa tanto integral quanto parcial
//200 - OK
//412 - Falha - Não atende aos pré-requisitos
const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/pedido_fechar_baixar_caixa', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`,
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