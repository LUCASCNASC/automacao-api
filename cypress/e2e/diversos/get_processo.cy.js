// /v3/processo - Processos Mobile
// Carregar dados dos processos configurados para o Mobile

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/processo', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Diversos/v2_diversos_processo/`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('diasamaismontagem');
          expect(resposta.body.retorno[0]).toHaveProperty('rotaobrigatoria');
          expect(resposta.body.retorno[0]).toHaveProperty('aceitavendasemsaldo_local');
          expect(resposta.body.retorno[0]).toHaveProperty('aceitavendasemsaldo_remota');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoupdatesaldoprodutolocal');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoupdatesaldoprodutoremoto');
          expect(resposta.body.retorno[0]).toHaveProperty('alteranomepessoavenda');
          expect(resposta.body.retorno[0]).toHaveProperty('solicitafiador');
          expect(resposta.body.retorno[0]).toHaveProperty('solicitartransportadora');
          expect(resposta.body.retorno[0]).toHaveProperty('imprimiraoconfirmar');
          expect(resposta.body.retorno[0]).toHaveProperty('avisaestoquenegativo');
          expect(resposta.body.retorno[0]).toHaveProperty('permitirdescontopromocao');
          expect(resposta.body.retorno[0]).toHaveProperty('somenteservico');
          expect(resposta.body.retorno[0]).toHaveProperty('visualizarrentabilidadeemarkup');
          expect(resposta.body.retorno[0]).toHaveProperty('visualizarcomissao');
          expect(resposta.body.retorno[0]).toHaveProperty('trialvendasemsaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('locaisdesaldo');
          expect(resposta.body.retorno[0].formaspagamentoavista[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].formaspagamentoavista[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formaspagamentoavista[0]).toHaveProperty('vencimentoem');
          expect(resposta.body.retorno[0].servicosautomaticos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicosautomaticos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicosautomaticos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].servicosautomaticos[0].processoisentojuros[0]).toHaveProperty('idprocesso');
          expect(resposta.body.retorno[0].servicosautomaticos[0].processoisentojuros[0]).toHaveProperty('descricaoprocesso');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('valor_fixo');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('valor_minimo');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('valor_maximo');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('percentual_fixo');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('obrigatorio_cobrar');
          expect(resposta.body.retorno[0].servicofrete[0]).toHaveProperty('permite_alterar');
        });
    });
  });