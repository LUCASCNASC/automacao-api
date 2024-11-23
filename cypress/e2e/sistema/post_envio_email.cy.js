// /v3/envio_email - Dados para Envio de Email
// Enviar Email

describe('Sistema - POST - /v3/envio_email', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v3_sistema_envio_email_post';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/envio_email - Resposta 200', () => {
      const requestBody = {
        "idUsuarioRemetente": 0,
        "nomeDestinatario": "string",
        "emailDestinatario": "string",
        "assunto": "string",
        "texto": "string",
        "anexos": [
          {
            "nomeArquivo": "string",
            "arquivo": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST',
        url,
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });