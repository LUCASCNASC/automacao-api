// /v3/dados_titular/{cpf} - Consulta de dados pessoais de titular
// Esse serviço retorna os dados pessoais do titular com base no CPF consultado. Para isso, basta informar o CPF válido do titular que deseja obter essas informações.

describe('Recarga - GET - /v3/dados_titular/{cpf}', () => {
    const url = 'http://localhost:8091/sabium#/LGPD/v3_get_lgpd_dados_titular';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/dados_titular/{cpf} - Resposta 200', () => {
      const requestBody = {
        cpf: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });