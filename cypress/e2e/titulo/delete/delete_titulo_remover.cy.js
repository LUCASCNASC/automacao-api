// /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo} - Remover Título Receber/Pagar
// Remoção A Receber/Pagar de Titulo e Parcelas
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const numeroEmpresa = ""; //integer - OBRIGATÓRIO
const numeroFilial = ""; //integer - OBRIGATÓRIO
const tipoTitulo = ""; //integer - OBRIGATÓRIO
const numeroTitulo = ""; //integer - OBRIGATÓRIO

describe('Titulo - DELETE - /v3/titulo_remover/{numeroEmpresa}/{numeroFilial}/{tipoTitulo}/{numeroTitulo}, { env: { hideCredendials: true } }', () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${BASE_URL}/Titulo/v3_delete_titulo_remover/${numeroEmpresa}/${numeroFilial}/${tipoTitulo}/${numeroTitulo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });