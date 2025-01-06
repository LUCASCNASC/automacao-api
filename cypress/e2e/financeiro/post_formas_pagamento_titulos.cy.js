// /v3/formas_pagamento_titulos - Lista de formas de pagamento por título
// Retorna as formas de pagamento disponíveis para os títulos informados.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/formas_pagamento_titulos', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('idEmpresa');
          expect(response.body.retorno[0]).toHaveProperty('idFilial');
          expect(response.body.retorno[0]).toHaveProperty('idTipoTitulo');
          expect(response.body.retorno[0]).toHaveProperty('idTitulo');
          expect(response.body.retorno[0]).toHaveProperty('idParcelaTitulo');
          expect(response.body.retorno[0]).toHaveProperty('idParcialTitulo');
          expect(response.body.retorno[0]).toHaveProperty('parcela');
          expect(response.body.retorno[0].formasPagamento[0]).toHaveProperty('tipo');
          expect(response.body.retorno[0].formasPagamento[0]).toHaveProperty('permiteParcial');
          expect(response.body.retorno[0].formasPagamento[0]).toHaveProperty('permiteDesconto');
          expect(response.body.retorno[0]).toHaveProperty('valorAtual');
          expect(response.body.retorno[0]).toHaveProperty('valorOriginal');
          expect(response.body.retorno[0]).toHaveProperty('dataVencimento');
        });
    });
  });