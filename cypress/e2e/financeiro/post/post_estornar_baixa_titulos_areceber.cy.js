// /v3/estornar_baixa_titulo_areceber - Estorno de baixa de título
// Efetuar o estorno da baixa do título a receber, gerando um novo título a pagar
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_post_estornar_baixa_titulo_areceber';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/estornar_baixa_titulo_areceber', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do estorno de baixa de título a receber', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idTitulo: 456
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Empresa');
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('Titulo');
      expect(ret).to.have.property('Qtde_Baixa_Estornadas');
      expect(ret).to.have.property('Titulo_AReceber_Gerado');
      expect(ret).to.have.property('Titulo_APagar_Gerado');
      expect(ret).to.have.property('Erros');
    });
  });
});