// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/corrigir_saldo_medio_produtos - Resposta 200', () => {
      const requestBody = {
        "Numero_Empresa": 0,
        "Departamento_Inicial": "string",
        "Departamento_Final": "string",
        "Produto_Inicial": "string",
        "Produto_Final": "string",
        "Data_Inicial": "string",
        "Data_Final": "string",
        "Data_Agendamento": "string",
        "Hora_Agendamento": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });