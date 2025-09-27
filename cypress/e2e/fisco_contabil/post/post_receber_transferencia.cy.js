// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_receber_transferencia';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/receber_transferencia', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do recebimento de transferência', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('IgnorarSituacaoSefaz');
      expect(ret.Notas[0]).to.have.property('IdFilialOrigem');
      expect(ret.Notas[0]).to.have.property('NumeroNota');
      expect(ret.Notas[0]).to.have.property('IdNFeSefaz');
      expect(ret).to.have.property('Mensagem');
      expect(ret).to.have.property('QtdeNotasRecebidas');
    });
  });
});