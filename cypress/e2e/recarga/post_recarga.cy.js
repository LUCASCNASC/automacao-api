// /v3/recarga - Recarga Telefone
// Efetivar Recarga Telefone

describe('Titulo - POST - /v3/recarga', () => {
    const url = 'http://localhost:8091/sabium#/Recarga/v3_post_recarga';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/recarga - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idUsuario": 0,
        "idTerminalCaixa": 0,
        "cnpjCpf": "string",
        "nomeCliente": "string",
        "idOperadoraTelefone": 0,
        "numeroTelefone": "string",
        "tipoPagamento": "string",
        "valor": 0,
        "dadosTEF": {
          "nsu": "string",
          "nsuHost": "string",
          "copiaRecibo": "string",
          "valor": 0,
          "autorizacao": "string",
          "modalidade": "string",
          "instituicao": "string",
          "bandeira": "string",
          "operadora": "string",
          "operacaoTEF": 0
        }
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });