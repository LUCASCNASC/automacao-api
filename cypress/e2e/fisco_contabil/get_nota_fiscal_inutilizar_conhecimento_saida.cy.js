// /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota} - Inutiliza nota fiscal de conhecimento de saída
// Inutilizar nota fiscal de conhecimento, registrado no sistema

describe('Fisco/Contábil - GET - /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota}', () => {
    const token = Cypress.env('AUTH_TOKEN');
    
  
    it('Resposta 200', () => {
      const requestBody = {
        Filial: "",
        RegistroNota: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_nota_fiscal_inutilizar_conhecimento_saida', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });