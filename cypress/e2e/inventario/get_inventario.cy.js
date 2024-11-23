// /v3/inventario - Inventários
// Lista os inventários em aberto e que não estejam com a data limite da contagem expirada. Se usuário for gerente, lista os inventários de todos os usuários

describe('Inventário - GET - /v3/inventario', () => {
    const url = 'http://localhost:8091/sabium#/Invent%C3%A1rio/v3_get_inventario';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/inventario - Resposta 200', () => {
      const requestBody = {
        "inventarios": [
          {
            "idFilial": 0,
            "numeroFilial": 0,
            "idInventario": 0,
            "idLocalSaldo": 0,
            "localSaldo": "string",
            "dataInicio": "string",
            "dataLimite": "string",
            "idUsuario": 0,
            "iniciado": 0,
            "tipoInventario": "string",
            "intervaloInicial": "string",
            "intervaloFinal": "string",
            "descricaoIntervaloInicial": "string",
            "descricaoIntervaloFinal": "string"
          }
        ]
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });