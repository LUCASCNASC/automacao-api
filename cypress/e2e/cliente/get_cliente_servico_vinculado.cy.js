// /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Serviços vinculados disponíveis para o cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cliente = "" //string - OBRIGATÓRIO
const processo = "" //number

describe('Cliente - GET - /v3/cliente_servico_vinculado/{cliente}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url:url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeProduto');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0]).toHaveProperty('dataVencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoTipoOrigem');
        });
    });
  });