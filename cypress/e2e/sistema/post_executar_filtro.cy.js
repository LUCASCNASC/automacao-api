// /v3/executar_filtro - Dados de retorno do filtro
// De acordo com o filtro informado é retornado o resultado conforme cadastro

describe('Sistema - POST - /v3/executar_filtro', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_executar_filtro';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/executar_filtro - Resposta 200', () => {
      const requestBody = {
        "idfiltro": 0,
        "idcontexto": 0,
        "parametros": [
          {
            "parametro": "string",
            "valorparametro": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });