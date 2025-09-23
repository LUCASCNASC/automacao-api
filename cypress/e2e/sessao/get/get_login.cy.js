// /v3/login/{usuario}/{senha} - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário. Login do usuário no sistema
//204 - Sem dados de retorno
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const usuario = ""; //string - OBRIGATÓRIO
const senha = ""; //string - OBRIGATÓRIO
const codigoverificacao = ""; //string

describe('Sessão - GET - /v3/login/{usuario}/{senha}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 204 - Sem dados de retorno', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Sessão/v2_sessao_login/${usuario}/${senha}/${codigoverificacao}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(204);
          expect(response.duration).to.be.below(2000);
        });
    });
  });