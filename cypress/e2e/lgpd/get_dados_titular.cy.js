// /v3/dados_titular/{cpf} - Consulta de dados pessoais de titular
// Esse serviço retorna os dados pessoais do titular com base no CPF consultado. Para isso, basta informar o CPF válido do titular que deseja obter essas informações.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Recarga - GET - /v3/dados_titular/{cpf}', () => {
  const url = '/LGPD/v3_get_lgpd_dados_titular';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cpf: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
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