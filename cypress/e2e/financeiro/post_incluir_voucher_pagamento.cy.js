// /v3/incluir_voucher_pagamento - Inclusão de título a pagar cliente por meio de voucher
// Validar dados do voucher e incluir título a pagar para o cliente vinculado ao voucher.
// 412 - Falha - Não atende aos pré-requisitos
// 201 - Criado

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/incluir_voucher_pagamento', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades do voucher de pagamento', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Financeiro/v3_financeiro_incluir_voucher_pagamento`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // chave: "ABC123",
        // valor: 100.00
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idfilial');
      expect(ret).to.have.property('chave');
      expect(ret).to.have.property('cnpjcpf');
      expect(ret).to.have.property('valor');
    });
  });
});