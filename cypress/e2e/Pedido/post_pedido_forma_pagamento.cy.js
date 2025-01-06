// /v3/pedido_forma_pagamento - Forma pagamento
// Listar formas de pagamento para o pedido mobile

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_forma_pagamento', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('parcelaValida');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('dataPrimeiroVencimento');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('tipoOperacao');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('percentualMaximoDescontoJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('percentualMaximoAcrescimoJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('solicitarFiador');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('entradaopcionalpromocao');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('entradamenorparcelaspromocao');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0]).toHaveProperty('maximoParcelas');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('numeroVezes');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valorSemJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('valorentradaobrigatoria');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('diferencaUltimaParcelaSemJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('percentualJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('contemJuros');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('possuiSeguroPrestamista');
          expect(resposta.body.retorno[0].servicos[0].formasPagamentos[0].parcelas[0]).toHaveProperty('idjurofinanceirogrupo');
        });
    });
  });