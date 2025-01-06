// /v3/inventario - Inventários
// Lista os inventários em aberto e que não estejam com a data limite da contagem expirada. Se usuário for gerente, lista os inventários de todos os usuários

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Inventário - GET - /v3/inventario', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('numeroFilial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idLocalSaldo');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('localSaldo');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('dataInicio');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('dataLimite');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idUsuario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('iniciado');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('tipoInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('intervaloInicial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('intervaloFinal');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('descricaoIntervaloInicial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('descricaoIntervaloFinal');
        });
    });
  });