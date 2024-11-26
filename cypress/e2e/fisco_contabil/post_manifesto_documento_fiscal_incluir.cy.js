// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/manifesto_documento_fiscal_incluir - Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial": "01001001000101",
        "Data_Inclusao": "string",
        "Entidade": 0,
        "UF_Percurso": "string",
        "CEP_Carregamento": "string",
        "CEP_Descarregamento": "string",
        "Observacao": "string",
        "Veiculo": 0,
        "Data_Baixa": "string",
        "Data_Saida": "string",
        "Motorista": 0,
        "Informacoes_Fisco": "string",
        "Informacoes_Contribuinte": "string",
        "Situacao": 0,
        "Situacao_Sefaz": 0,
        "Tipo_Envio": 0,
        "Data_Inicio_Viagem": "string",
        "Hora_Inicio_Viagem": "string",
        "Produto": 0,
        "GradeX": 0,
        "GradeY": 0,
        "Filial_Pagamento": 0,
        "Valor_Contrato": 0,
        "Banco": 0,
        "Agencia": 0,
        "Instituicao_Pagamento": "01001001000101",
        "Chave_PIX": "string",
        "XML_Manifesto": [
          {
            "Chave_Sefaz": "string",
            "Cod_Mun_Dest": 0,
            "Numero_Nota": 0,
            "Serie": "string",
            "CNPJ_CPF": "01001001000101 ou 00100100101",
            "Total_Nota": 0,
            "Peso_Bruto": 0,
            "Filial_Nota": 0,
            "Registro_Nota": 0,
            "XMLNota_Base64": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
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