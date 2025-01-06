// /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo} - Remover Título Receber/Pagar
// Remoção A Receber/Pagar de Titulo e Parcelas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Titulo - DELETE - /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo}', () => {
  const url = '/Titulo/v3_delete_titulo_remover';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        numeroEmpresa: "",
        numeroFilial: "",
        tipoTitulo: "",
        numeroTitulo: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });