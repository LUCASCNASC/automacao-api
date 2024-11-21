// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento

describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_lista_solicitacao_processamento';
  
    it('POST - /v3/lista_solicitacao_processamento - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });