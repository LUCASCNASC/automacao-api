// /v3/documento_diverso_lista/ - Lista de documentos diversos
// Retorna uma lista de documentos diversos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/documento_diverso_lista/', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('idempresa');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('idfilial');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('iddocumentodiverso');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('idprocesso');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('descricao');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('datamovimento');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('documento');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('cnpj_cpf');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('nome');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('documentoreferenciado');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('valor');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('idusuario');
          expect(response.body.retorno[0].documentos[0]).toHaveProperty('observacao');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('idregistronota');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('numeronota');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('serie');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('totaldespesas');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('totaloutras');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('totalnota');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('CadastroNacionalObras');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('IdIndicativoPrestacaoServicoReinf');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('IdTipoRepasseReinf');
          expect(response.body.retorno[0].documentos[0].notas[0]).toHaveProperty('IdClassificacaoServicoPrestadoRein');
          expect(response.body.retorno[0].documentos[0].impostos[0]).toHaveProperty('idregistronota');
          expect(response.body.retorno[0].documentos[0].impostos[0]).toHaveProperty('tipoimposto');
          expect(response.body.retorno[0].documentos[0].impostos[0]).toHaveProperty('valorbasecalculo');
          expect(response.body.retorno[0].documentos[0].impostos[0]).toHaveProperty('aliquota');
          expect(response.body.retorno[0].documentos[0].impostos[0]).toHaveProperty('valorimposto');
          expect(response.body.retorno[0].documentos[0].titulos[0]).toHaveProperty('idtitulo');
          expect(response.body.retorno[0].documentos[0].titulos[0]).toHaveProperty('idparcelatitulo');
          expect(response.body.retorno[0].documentos[0].titulos[0]).toHaveProperty('datavencimento');
          expect(response.body.retorno[0].documentos[0].titulos[0]).toHaveProperty('valorcontabil');
          expect(response.body.retorno[0].documentos[0].titulos[0]).toHaveProperty('formapagamento');
          expect(response.body.retorno[0].documentos[0].centrocusto[0]).toHaveProperty('classificacao');
          expect(response.body.retorno[0].documentos[0].centrocusto[0]).toHaveProperty('descricao');
          expect(response.body.retorno[0].documentos[0].centrocusto[0]).toHaveProperty('tipoimposto');
          expect(response.body.retorno[0].documentos[0].centrocusto[0]).toHaveProperty('tipo');
          expect(response.body.retorno[0].documentos[0].centrocusto[0]).toHaveProperty('valor');
          expect(response.body.retorno[0].documentos[0].contacorrente[0]).toHaveProperty('idlancamento');
          expect(response.body.retorno[0].documentos[0].contacorrente[0]).toHaveProperty('idhistoricocontacorrente');
          expect(response.body.retorno[0].documentos[0].contacorrente[0]).toHaveProperty('descricao');
          expect(response.body.retorno[0].documentos[0].contacorrente[0]).toHaveProperty('valor');
        });
    });
  });