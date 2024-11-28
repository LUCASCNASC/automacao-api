// /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo} - Remover Título Receber/Pagar
// Remoção A Receber/Pagar de Titulo e Parcelas

describe('Titulo - DELETE - /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo} - Resposta 200', () => {
      const requestBody = {
        numeroEmpresa: "",
        numeroFilial: "",
        tipoTitulo: "",
        numeroTitulo: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url: '/Titulo/v3_delete_titulo_remover', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });