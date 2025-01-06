// /v3/pedido_forma_pagamento_servico_vinculado - Serviços vinculados
// Listar serviços vinculados a forma de pagamento do pedido mobile

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_forma_pagamento_servico_vinculado', () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorServicoSemJuros');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('isentarJurosServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('quantidadeInicial');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('origemValorServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('tipoValor');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('tipoAplicacao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('lancarautomatico');

        });
    });
  });