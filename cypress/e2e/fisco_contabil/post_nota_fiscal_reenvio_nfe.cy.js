describe('Fisco/Contábil - POST - /v3/nota_fiscal_reenvio_nfe/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_nota_fiscal_reenvio_nfe';
  
    it('POST - /v3/nota_fiscal_reenvio_nfe/ - Resposta 200', () => {
      const requestBody = {
        "ID_Filiais": [
          10006
        ],
        "Registro_Nota_Inicial": 2663,
        "Registro_Nota_Final": 2663,
        "Data_Inicial": "17/10/2024",
        "Data_Final": "17/10/2024",
        "Conectar_Servidor_Filial": true
      }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });