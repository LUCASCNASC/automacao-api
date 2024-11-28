// /v3/estoque/ - Dados Estoque
// Retorna o estoque

describe('Projeto Real Time - POST - /v3/estoque/', () => {
    const url = 'http://localhost:8091/sabium#/Projeto%20Real%20Time/v3_post_estoque';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/estoque/ - Resposta 200', () => {
      const requestBody = {
        "cnpj": "77941490000589",
        "data": "15/10/2024"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: url, 
        //headers: { Authorization: `Bearer ${token}` },
        body: requestBody
      })
        .then((response) => {
          expect(response.body).to.have.property('retorno').and.to.be.an('array').and.to.have.lengthOf(2);

          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
          expect(response.body.retorno[0]).to.have.property('CNPJ').and.to.eq('77941490000589');
        });
    });
  });