// /v3/cliente_simples_estatisticas/{idpessoa} - Dados do cliente
// Estatísticas do cliente simplificado

describe('Cliente - GET - /v3/cliente_simples_estatisticas/{idpessoa}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v2_cliente_simples_estatisticas';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/cliente_simples_estatisticas/{idpessoa} - Resposta 200', () => {
      const requestBody = {
        idpessoa: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });