// /v3/mapa_carga_acarregar_itens - Carregar o itens do mapa de carga cliente/loja e altera o mapa de carga
// Retorna os itens do mapa de carga com as informações da coleta, atualiza o usuário da coleta para o usuário informado e atualiza a situação do mapa de carga para Em Carga.
//200 - OK
//204 - Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_acarregar_itens', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Logística/v3_post_mapa_carga_acarregar_itens`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('iditembase');
          expect(resposta.body.retorno[0]).toHaveProperty('idpedidoloja');
          expect(resposta.body.retorno[0]).toHaveProperty('filialdetalhe');
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('idmapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('tipomapacarga');
          expect(resposta.body.retorno[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0]).toHaveProperty('idcodigobarra');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdeitembase');
          expect(resposta.body.retorno[0]).toHaveProperty('qtdecoletado');
          expect(resposta.body.retorno[0]).toHaveProperty('numerovolume');
          expect(resposta.body.retorno[0]).toHaveProperty('multiplicadorvolume');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialitembase');
          expect(resposta.body.retorno[0]).toHaveProperty('idagrupadorkit');
        });
    });
  });