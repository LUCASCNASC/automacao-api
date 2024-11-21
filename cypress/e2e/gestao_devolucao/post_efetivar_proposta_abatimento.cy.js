// /v3/efetivar_proposta_abatimento - Efetivar proposta de abatimento
// Efetivar propostas de abatimento do sistema de gestão de devolução.

describe('Gestão Devolução - POST - /v3/efetivar_proposta_abatimento', () => {
    const url = 'http://localhost:8091/sabium#/Gest%C3%A3o%20Devolu%C3%A7%C3%A3o/v2_gestao_devolucao_efetivar_proposta_abatimento';
  
    it('POST - /v3/efetivar_proposta_abatimento - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });