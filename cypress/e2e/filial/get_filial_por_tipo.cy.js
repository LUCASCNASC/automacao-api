// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Lista de Filial
// Retorna uma lista das filiais de acordo com os parâmetros informados

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const uf = 'PR'; //string
const municipio = 3317; //number
const tipo = 1; //number

describe('Filial - GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Filial/v3_get_filial_por_tipo/${uf}/${municipio}/${tipo}`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(resposta.status).toBe(200);
      expect(resposta.body.retorno[0]).toHaveProperty('idtipofilial');
      expect(resposta.body.retorno[0]).toHaveProperty('descricao_tipofilial');
      expect(resposta.body.retorno[0]).toHaveProperty('nome_filial');
      expect(resposta.body.retorno[0]).toHaveProperty('logradouro');
      expect(resposta.body.retorno[0]).toHaveProperty('numero');
      expect(resposta.body.retorno[0]).toHaveProperty('complemento');
      expect(resposta.body.retorno[0]).toHaveProperty('bairro');
      expect(resposta.body.retorno[0]).toHaveProperty('idcidade');
      expect(resposta.body.retorno[0]).toHaveProperty('cidade');
      expect(resposta.body.retorno[0]).toHaveProperty('telefone');
      expect(resposta.body.retorno[0]).toHaveProperty('cep');
      expect(resposta.body.retorno[0]).toHaveProperty('uf');
    })
  })
})