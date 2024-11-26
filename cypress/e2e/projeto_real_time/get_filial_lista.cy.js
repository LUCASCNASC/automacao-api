// /v3/filial_lista/ - Dados Filial
// Retorna uma lista das filiais

describe('Projeto Real Time - GET - /v3/filial_lista/', () => {
    const url = 'http://localhost:8091/sabium#/Projeto%20Real%20Time';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/filial_lista/ - Resposta 200', () => {
      const requestBody = {
        "EMPRESA": "string",
        "CNPJ": "string",
        "RAZAO_SOCIAL": "string",
        "LOGRADOURO": "string",
        "NUMERO": "string",
        "COMPLEMENTO": "string",
        "CIDADE": "string",
        "UF": "string",
        "CEP": "string"
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });