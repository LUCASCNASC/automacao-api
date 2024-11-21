// /v3/configuracao_recarga - Servico para recarga TEF
// Retorna o serviço e as formas de pagamento configurados para recarga de celular via TEF

describe('Recarga - GET - /v3/configuracao_recarga', () => {
    const url = 'http://localhost:8091/sabium#/Recarga/v3_configuracao_recarga';
  
    it('GET - /v3/configuracao_recarga - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });