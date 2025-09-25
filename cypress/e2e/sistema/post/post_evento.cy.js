// /v3/evento - Registra eventos do sistema
// Utilizado para registrar os eventos de movimentação dentro do Mobile
//201 - Criado
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sistema - POST - /v3/evento', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Sistema/v2_sistema_evento`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000);
        });
    });
  });