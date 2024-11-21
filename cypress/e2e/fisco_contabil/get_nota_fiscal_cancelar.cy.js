// /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota} - Cancela nota fiscal
// Cancelar nota fiscal autorizada Sefaz

describe('Fisco/Contábil - GET - /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_nota_fiscal_cancelar';
  
    it('GET - /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });