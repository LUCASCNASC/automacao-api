// /v3/departamento - Lista de departamento
// Listas dos departamentos.

describe('Produtos - GET - /v3/departamento', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/departamento - Resposta 200', () => {
      const requestBody = {
        "codigo": 0,
        "nome": "string",
        "imagem": "string",
        "departamento": [
          {
            "codigo": 0,
            "nome": "string",
            "imagem": "string"
          }
        ]
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Produto/v2_produto_departamento', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });