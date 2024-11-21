// /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME
// Dados do cliente simplificado

describe('Cliente - GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_por_cnpj_cpf_ou_nome';
  
    it('GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });