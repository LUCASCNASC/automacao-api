// /v3/configuracao_recarga - Servico para recarga TEF
// Retorna o serviço e as formas de pagamento configurados para recarga de celular via TEF
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Recarga - GET - /v3/configuracao_recarga', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Recarga/v3_configuracao_recarga`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idServico');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('idProcesso');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricaoAbreviada');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('tipo');
        });
    });
  });