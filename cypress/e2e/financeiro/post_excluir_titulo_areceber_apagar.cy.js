// /v3/excluir_titulo_areceber_apagar - Exclusão de título (a receber ou a pagar)
// Efetuar a exclusão de título a receber ou a pagar

describe('Financeiro - POST - /v3/excluir_titulo_areceber_apagar', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/excluir_titulo_areceber_apagar - Resposta 200', () => {
      const requestBody = {
        "Numero_Empresa": 0,
        "Numero_Filial": 0,
        "Numero_Titulo": 0,
        "AReceber_ou_APagar": 0,
        "CNPJ_CPF": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_excluir_titulo_areceber_apagar', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });