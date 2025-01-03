// /v3/inventario - Inventários
// Lista os inventários em aberto e que não estejam com a data limite da contagem expirada. Se usuário for gerente, lista os inventários de todos os usuários

import reqBody_get_inventario from '../../fixtures/inventario/get_inventario.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Inventário - GET - /v3/inventario', () => {
  const url = '/Invent%C3%A1rio/v3_get_inventario';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_inventario,
        failOnStatusCode: false
      })
        .then((response) => {
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