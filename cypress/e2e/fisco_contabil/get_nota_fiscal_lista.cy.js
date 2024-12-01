// /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF} - Lista de notas fiscais
// Retornar lista das notas fiscais consultadas

describe('Fisco/Contábil - GET - /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        Filial: "",
        Registro_Nota: "",
        Data_Inicial: "",
        Data_Final: "",
        CNPJ_CPF: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_nota_fiscal_lista', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });