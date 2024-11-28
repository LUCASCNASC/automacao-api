// /v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota} - Calcula impostos da nota fiscal
// Calcular impostos da nota fiscal

describe('Fisco/Contábil - GET - /v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/nota_fiscal_calcular_imposto/{Filial}/{RegistroNota} - Resposta 200', () => {
      const requestBody = {
        Filial: "",
        RegistroNota: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_nota_fiscal_calcular_imposto', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });