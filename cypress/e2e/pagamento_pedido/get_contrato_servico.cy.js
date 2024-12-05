// /v3/contrato_servico/{filial}/{pedido} - Contrato serviço
// Contrato do serviço

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pagamento pedido - GET - /v3/contrato_servico/{filial}/{pedido}', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_contrato_servico';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
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
        });
    });
  });