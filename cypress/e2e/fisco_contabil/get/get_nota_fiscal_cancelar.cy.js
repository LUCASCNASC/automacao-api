// /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota} - Cancela nota fiscal
// Cancelar nota fiscal autorizada Sefaz
// 204 - Sem dados de retorno
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_nota_fiscal_cancelar';
const Authorization = Cypress.env('API.PRAGMA');
const Filial = ""; // integer - OBRIGATÓRIO
const RegistroNota = ""; // integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do cancelamento de nota fiscal', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${Filial}/${RegistroNota}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('ID_Filial');
      expect(ret).to.have.property('ID_Registro_Nota');
      expect(ret).to.have.property('Status');
      expect(ret).to.have.property('Erros');
    });
  });
});