// /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF} - Lista de notas fiscais
// Retornar lista das notas fiscais consultadas

describe('Fisco/Contábil - GET - /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_nota_fiscal_lista';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF} - Resposta 200', () => {
      const requestBody = {
        Filial: "",
        Registro_Nota: "",
        Data_Inicial: "",
        Data_Final: "",
        CNPJ_CPF: ""
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