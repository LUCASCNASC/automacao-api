// /v3/pos_venda_qualificacao - Qualificações Pós-venda
// listas de qualificações da pós-venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pós-venda - GET - /v3/pos_venda_qualificacao', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: '`${API_URL}/Pedido/v2_pedido_get_delete2/${codigo}/${idfilial}`', 
        url: `${API_URL}/Pós-venda/v2_pos_venda_qualificacao`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idqualificacao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });