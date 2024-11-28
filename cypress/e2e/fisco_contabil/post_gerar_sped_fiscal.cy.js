// /v3/gerar_sped_fiscal - Gera SPED fiscal
// Incluir solicitação de processamento para gerar o SPED fiscal

describe('Fisco/Contábil - POST - /v3/gerar_sped_fiscal', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/gerar_sped_fiscal - Resposta 200', () => {
      const requestBody = {
        "Dados SPED": [
          {
            "Numero Empresa": 0,
            "Numero Filial": 0,
            "Data Inicial": "string",
            "Data Final": "string",
            "Periodo Apuracao": 0,
            "Finalidade Remessa": "string",
            "Atividade": "string",
            "Perfil": "string",
            "Valores Agregados": true,
            "Gerar Registro E115": true,
            "Gerar Registro 1600": true,
            "Meios Pagamento Registro 1600": [
              0
            ]
          }
        ],
        "Dados Inventario": [
          {
            "Data Inventario": "string",
            "Motivo Inventario": 0,
            "Gerar Registro H020": true,
            "Locais Saldo": [
              0
            ],
            "Departamentos": [
              "string"
            ]
          }
        ],
        "Dados Agendamento": [
          {
            "Data Agendamento": "string",
            "Hora Agendamento": "string"
          }
        ],
        "Dados FTP": [
          {
            "Host": "string",
            "Porta": 0,
            "Usuario": "string",
            "Senha": "string",
            "Diretorio": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_sped_fiscal', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });