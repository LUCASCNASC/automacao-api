// /v3/nota_fiscal_consulta_nfe/ - Consulta NFE
// Consulta NFE

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/nota_fiscal_consulta_nfe/ - Resposta 200', () => {
      const requestBody = {
        "Numero_Empresa": "1",
        "Numero_Filial_Origem": "string",
        "Numeros_Filiais": [
          "string"
        ],
        "Centro_Custo_Inicial": "string",
        "Centro_Custo_Final": "string",
        "Conta_Contabil_Inicial": "string",
        "Conta_Contabil_Final": "string",
        "Conta_Partida": "string",
        "Novo_Historico": "string",
        "Complemento": "string",
        "Nova_Data": "string",
        "Movimento_Inicial": "string",
        "Movimento_Final": "string",
        "Data_Agendamento": "string",
        "Hora_Agendamento": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_rateio_centro_custo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });