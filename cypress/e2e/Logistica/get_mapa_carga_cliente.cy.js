// /v3/mapa_carga_cliente/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal} - Lista Mapa Carga Cliente
// Retorna uma lista com os mapas de carga cliente, de acordo com o preenchimento dos parâmetros de entrada:

describe('Logística - GET - /v3/mapa_carga_cliente/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal}', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_cliente';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/mapa_carga_cliente/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idSituacaoMapaCarga: "",
        dataInicial: "",
        dataFinal: ""
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