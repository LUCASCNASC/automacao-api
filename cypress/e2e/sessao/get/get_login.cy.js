// /v3/login/{usuario}/{senha} - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário. Login do usuário no sistema
//204 - Sem dados de retorno
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Sessão/v2_sessao_login';
const Authorization = Cypress.env('API.PRAGMA')
const usuario = ""; //string - OBRIGATÓRIO
const senha = ""; //string - OBRIGATÓRIO
const codigoverificacao = ""; //string

describe('Sessão - GET - /v3/login/{usuario}/{senha}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 204 - Sem dados de retorno', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${usuario}/${senha}/${codigoverificacao}`, 
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