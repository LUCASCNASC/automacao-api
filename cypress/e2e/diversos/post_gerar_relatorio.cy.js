// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64

describe('Diversos - POST - /v3/gerar_relatorio', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_gerar_relatorio';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/gerar_relatorio - Resposta 200', () => {
      const requestBody = {
        "idContexto": 0,
        "idmodelorelatorio": 0,
        "filtros": [
          {
            "nome": "string",
            "valor": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });