// /v3/baixa_divida_cliente - Baixa títulos do cliente
// Baixa título do cliente

describe('Financeiro - POST - /v3/baixa_divida_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/baixa_divida_cliente - Resposta 200', () => {
      const requestBody = {
        "idfilialpagamento": 0,
        "datapagamento": "string",
        "nsuprimeirocartao": "string",
        "nsusegundocartao": "string",
        "nsuhostprimeirocartao": "string",
        "nsuhostsegundocartao": "string",
        "autorizacaoprimeirocartao": "string",
        "autorizacaosegundocartao": "string",
        "valorprimeirocartao": 0,
        "valorsegundocartao": 0,
        "copiareciboprimeirocartao": "string",
        "copiarecibosegundocartao": "string",
        "modalidadeprimeirocartao": "string",
        "modalidadesegundocartao": "string",
        "instituicaoprimeirocartao": "string",
        "instituicaosegundocartao": "string",
        "bandeiraprimeirocartao": "string",
        "bandeirasegundocartao": "string",
        "operadoraprimeirocartao": "string",
        "operadorasegundocartao": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_baixa_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });