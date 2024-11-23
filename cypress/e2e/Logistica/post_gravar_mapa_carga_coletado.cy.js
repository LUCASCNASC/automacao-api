// /v3/gravar_mapa_carga_coletado - Altera a situação do mapa de carga cliente/loja para Coletado
// Finaliza a coleta do mapa de carga e/ou atualiza os itens coletados

describe('Logística - POST - /v3/gravar_mapa_carga_coletado', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_gravar_mapa_carga_coletado';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/gravar_mapa_carga_coletado - Resposta 200', () => {
      const requestBody = {
        "Filial": 0,
        "Mapa Carga": 0,
        "Tipo Mapa Carga": 0,
        "Tipo Gravacao": 0,
        "Itens Coletados": [
          {
            "idfilial": 0,
            "iditembase": 0,
            "idmapacarga": 0,
            "qtdeitembase": 0,
            "qtdecoletado": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
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