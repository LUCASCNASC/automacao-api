// /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Serviços vinculados disponíveis para o cliente

describe('Cliente - GET - /v3/cliente_servico_vinculado/{cliente}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_servico_vinculado';
  
    it('GET - /v3/cliente_servico_vinculado/{cliente} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });