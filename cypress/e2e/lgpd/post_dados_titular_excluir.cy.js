// /v3/dados_titular_excluir - Excluir dados titular
// Exclusão dos dados do titular

describe('Titulo - POST - /v3/dados_titular_excluir', () => {
    const url = 'http://localhost:8091/sabium#/LGPD/v3_post_lgpd_dados_titular_excluir';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/dados_titular_excluir - Resposta 200', () => {
      const requestBody = {
        "cnpj_cpf": "string",
        "excluirtodosdados": true,
        "identificacao": {
          "nome": true,
          "rg": true,
          "orgaoemissorrg": true,
          "dataemissaorg": true,
          "emancipado": true,
          "aposentado": true,
          "sexo": true,
          "pensionista": true,
          "estadocivil": true,
          "ocupacao": true,
          "tiporesidencia": true,
          "exposicaopolitica": true,
          "nacionalidade": true,
          "datanascimento": true,
          "cnh": true,
          "dataexpiracaocnh": true,
          "cidadenaturalidade": true,
          "categoriacnh": true,
          "numerocarteiraprofissional": true,
          "seriecarteiraprofissional": true,
          "ufcarteiraprofissional": true,
          "numeroinscricaotrabalhador": true,
          "numeroconselhoprofissional": true
        },
        "enderecos": [
          {
            "idtipoendereco": 0,
            "logradouro": "string"
          }
        ],
        "contatos": {
          "telefones": [
            {
              "telefone": "string"
            }
          ],
          "emails": [
            {
              "email": "string"
            }
          ]
        },
        "dependentes": [
          {
            "nome": "string"
          }
        ],
        "vinculoempregaticio": {
          "empresas": [
            {
              "empresa": "string"
            }
          ],
          "nivelformacao": true
        },
        "financeiro": {
          "outrasrendas": true,
          "faturamentoanual": true,
          "prolabore": true,
          "valorpatrimonio": true,
          "veiculoquitado": true,
          "valoraluguel": true
        },
        "referenciaspessoais": [
          {
            "nome": "string"
          }
        ],
        "referenciasbancarias": [
          {
            "agencia": "string",
            "banco": "string",
            "conta": "string",
            "tipoconta": "string"
          }
        ],
        "outros": {
          "placaveiculo": true,
          "residente": true,
          "renavam": true
        }
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
        url,
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });