// /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota} - Inutiliza nota fiscal de conhecimento de saída
// Inutilizar nota fiscal de conhecimento, registrado no sistema

describe('Fisco/Contábil - GET - /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_nota_fiscal_inutilizar_conhecimento_saida';
  
    it('GET - /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });