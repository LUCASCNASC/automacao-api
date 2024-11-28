// /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME
// Dados do cliente simplificado

describe('Cliente - GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Resposta 200', () => {
      const requestBody = {
        valor: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Cliente/v3_cliente_por_cnpj_cpf_ou_nome', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });