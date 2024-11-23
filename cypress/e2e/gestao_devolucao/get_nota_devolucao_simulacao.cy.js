// /v3/nota_devolucao_simulacao/{filial}/{solicitacao} - Simulação de Nota Devolução
// Simulação da nota de devolução da solicitação. Retorna as notas que foram incluídas para simulação da solicitação da nota de devolução para avaliação interna da empresa.

describe('Gestão Devolução - GET - /v3/nota_devolucao_simulacao/{filial}/{solicitacao}', () => {
    const url = 'http://localhost:8091/sabium#/Gest%C3%A3o%20Devolu%C3%A7%C3%A3o/v2_gestao_devolucao_nota_devolucao_simulacao';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/nota_devolucao_simulacao/{filial}/{solicitacao} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        solicitacao: "",
        Authorization: ""
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