// /v3/pedido_forma_pagamento_servico_vinculado - Serviços vinculados
// Listar serviços vinculados a forma de pagamento do pedido mobile
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_forma_pagamento_servico_vinculado', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Pedido/v3_pedido_forma_pagamento_servico_vinculado`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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