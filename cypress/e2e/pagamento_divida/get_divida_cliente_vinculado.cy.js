// /v3/divida_cliente_vinculado/{filial}/{cliente} - Títulos vinculados do cliente
// lista de títulos vinculados a receber do cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = ""; //number - OBRIGATÓRIO
const cliente = ""; //string - OBRIGATÓRIO

describe('Pagamento divida - GET - /v3/divida_cliente_vinculado/{filial}/{cliente}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('valor');
        });
    });
  });