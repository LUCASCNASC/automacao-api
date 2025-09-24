// /v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente
// Consultar os anexos do cliente
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idcnpj_cpf = "100002139114930"; // string - OBRIGATÓRIO

describe('Filial - GET - /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do anexo', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Cliente/v3_cliente_anexo/${idcnpj_cpf}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.retorno[0]).to.have.property('idcnpj_cpf');
      const anexo = response.body.retorno[0].anexo[0];
      expect(anexo).to.have.property('idtipoanexo');
      expect(anexo).to.have.property('idpessoaanexo');
      expect(anexo).to.have.property('descricao');
      expect(anexo).to.have.property('arquivo');
      expect(anexo).to.have.property('datamovimento');
    });
  });
});