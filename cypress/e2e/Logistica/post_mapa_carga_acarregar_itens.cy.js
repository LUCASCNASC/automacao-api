// /v3/mapa_carga_acarregar_itens - Carregar o itens do mapa de carga cliente/loja e altera o mapa de carga
// Retorna os itens do mapa de carga com as informações da coleta, atualiza o usuário da coleta para o usuário informado e atualiza a situação do mapa de carga para Em Carga.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_acarregar_itens', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
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