// /v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente
// Consultar os anexos do cliente

describe('Cliente - GET -/v3/cliente_anexo/{idcnpj_cpf}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_anexo';
  
    it('GET - /v3/cliente_anexo/{idcnpj_cpf} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });