// /v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente
// Consultar os anexos do cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idcnpj_cpf = "100002139114930" //string - OBRIGATÓRIO
const idtipoanexo = "" //integer
const idpessoaanexo = "" //string

describe('Filial - GET - /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Cliente/v3_cliente_anexo/${idcnpj_cpf}`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(status).to.equal(200)
      expect(response.body.retorno[0]).toHaveProperty('idcnpj_cpf');
      expect(response.body.retorno[0].anexo[0]).toHaveProperty('idtipoanexo');
      expect(response.body.retorno[0].anexo[0]).toHaveProperty('idpessoaanexo');
      expect(response.body.retorno[0].anexo[0]).toHaveProperty('descricao');
      expect(response.body.retorno[0].anexo[0]).toHaveProperty('arquivo');
      expect(response.body.retorno[0].anexo[0]).toHaveProperty('datamovimento');

    })
  })
})