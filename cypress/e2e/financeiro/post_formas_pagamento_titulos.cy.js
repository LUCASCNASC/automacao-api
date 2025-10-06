// Testes para o endpoint: /v3/formas_pagamento_titulos - Lista de formas de pagamento por título
// Retorna as formas de pagamento disponíveis para os títulos informados.
// Códigos de resposta esperados:
// - 201: Criado
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_formas_pagamento_titulos';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/formas_pagamento_titulos', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 201 e as propriedades de formas de pagamento por título', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // titulos: [{idTitulo: 1, idFilial: 1}]
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idEmpresa');
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTipoTitulo');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('parcela');
      expect(ret.formasPagamento[0]).to.have.property('tipo');
      expect(ret.formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret).to.have.property('valorAtual');
      expect(ret).to.have.property('valorOriginal');
      expect(ret).to.have.property('dataVencimento');
    });
  });

  it('Deve retornar 412 ao tentar consultar formas de pagamento com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});