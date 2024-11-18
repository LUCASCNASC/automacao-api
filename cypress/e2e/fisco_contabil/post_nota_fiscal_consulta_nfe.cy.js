describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_nota_fiscal_consulta_nfe';
  
    it('POST - /v3/nota_fiscal_consulta_nfe/ - Resposta 200', () => {
      const requestBody = {
        "ID_Filiais": [
          10050
        ],
        "Registro_Nota_Inicial": 1,
        "Registro_Nota_Final": 999999,
        "Data_Inicial": "01/10/2024",
        "Data_Final": "31/12/2024",
        "Conectar_Servidor_Filial": false
      }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });