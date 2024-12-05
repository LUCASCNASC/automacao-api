// /v3/nota_devolucao_simulacao/{filial}/{solicitacao} - Simulação de Nota Devolução
// Simulação da nota de devolução da solicitação. Retorna as notas que foram incluídas para simulação da solicitação da nota de devolução para avaliação interna da empresa.

import acess_token from '../../fixtures/token.json'

describe('Gestão Devolução - GET - /v3/nota_devolucao_simulacao/{filial}/{solicitacao}', () => {
  const url = '/Gestão%20Devolução/v2_gestao_devolucao_nota_devolucao_simulacao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        solicitacao: "",
        Authorization: ""
      }

      cy.request({
        method: 'GET', 
        url: '', 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });