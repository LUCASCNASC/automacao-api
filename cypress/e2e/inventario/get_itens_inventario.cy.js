// /v3/itens_inventario/{idFilial}/{idInventario} - Itens do Inventário
// Lista os itens do inventários.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', () => {
  const url = '/Invent%C3%A1rio/v3_get_itens_inventario';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'GET', 
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
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idProduto');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeX');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeY');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('codigoBarra');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoFilial');

        });
    });
  });