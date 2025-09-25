// /v3/dados_titular/{cpf} - Consulta de dados pessoais de titular
// Esse serviço retorna os dados pessoais do titular com base no CPF consultado. Para isso, basta informar o CPF válido do titular que deseja obter essas informações.
//204 - Sem dados de retorno
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cpf = ""; //string - OBRIGATÓRIO

describe('Recarga - GET - /v3/dados_titular/{cpf}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/LGPD/v3_get_lgpd_dados_titular/${cpf}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0].titular[0]).toHaveProperty('identificacao');
          expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].enderecos[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].contatos[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].dependentes[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].vinculoempregaticio[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].financeiro[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].referenciapessoal[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].referenciabancaria[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].outros[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].titular[0].notafiscal[0].campos[0]).toHaveProperty('titulo');
        });
    });
  });