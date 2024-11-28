// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
    
  
    it('POST - /v3/gerar_descarga_contabil - Resposta 200', () => {
      const requestBody = {
        "Numero_Empresa": "1",
        "Numeros_Filiais": [
          "string"
        ],
        "Numeros_Descargas": [
          "string"
        ],
        "Data_Inicial": "string",
        "Data_Final": "string",
        "Ativa_Retorno_Descarga": "0",
        "Usuario": "1",
        "Data_Agendamento": "string",
        "Hora_Agendamento": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_descarga_contabil', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });