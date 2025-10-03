// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_lista_solicitacao_processamento';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da lista de solicitações de processamento', () => {
    cy.api({
      method: 'POST',
      url: `${API_BASE_URLURL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('ID_Filial');
      expect(ret).to.have.property('ID_Processamento');
      expect(ret).to.have.property('Data_Processamento');
      expect(ret).to.have.property('Tipo_Processamento');
      expect(ret).to.have.property('Situacao_Processamento');
      expect(ret).to.have.property('Data_Agendamento');
      expect(ret).to.have.property('Inicio_Processamento');
      expect(ret).to.have.property('Fim_Processamento');
      expect(ret).to.have.property('Mensagem_Falha');
    });
  });
});