// /v3/estornar_baixa_titulo_areceber - Estorno de baixa de título
// Efetuar o estorno da baixa do título a receber, gerando um novo título a pagar

describe('Financeiro - POST - /v3/estornar_baixa_titulo_areceber', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_post_estornar_baixa_titulo_areceber';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/estornar_baixa_titulo_areceber - Resposta 200', () => {
      const requestBody = {
        "Numero_Empresa": 0,
        "Numero_Filial": 0,
        "Numero_Titulo": 0,
        "Numero_Parcelas": [
          null
        ],
        "Todas_Parcelas": true,
        "CNPJ_CPF_Titulo_APagar": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
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