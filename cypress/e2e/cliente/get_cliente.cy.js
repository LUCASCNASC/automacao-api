// /v3/cliente/{cliente} - Dados do cliente
// Dados do cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cliente = ""; //string - OBRIGATÓRIO  

describe('Cliente - GET - /v3/cliente/{cliente}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Cliente/v2_cliente_get_delete_get/${cliente}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('nomefantasia');
          expect(resposta.body.retorno[0]).toHaveProperty('datacriacao');
          expect(resposta.body.retorno[0]).toHaveProperty('idtiposexo');
          expect(resposta.body.retorno[0]).toHaveProperty('idtipocontribuinte');
          expect(resposta.body.retorno[0]).toHaveProperty('faturamentoanual');
          expect(resposta.body.retorno[0]).toHaveProperty('pai');
          expect(resposta.body.retorno[0]).toHaveProperty('mae');
          expect(resposta.body.retorno[0]).toHaveProperty('nacionalidade');
          expect(resposta.body.retorno[0]).toHaveProperty('atualizarcadastro');
          expect(resposta.body.retorno[0]).toHaveProperty('idtipoestadocivil');
          expect(resposta.body.retorno[0]).toHaveProperty('idnivelformacao');
          expect(resposta.body.retorno[0]).toHaveProperty('idtipoocupacao');
          expect(resposta.body.retorno[0]).toHaveProperty('empresaatividade');
          expect(resposta.body.retorno[0]).toHaveProperty('registrojuntacomercial');
          expect(resposta.body.retorno[0]).toHaveProperty('dataregistrojuntacomercial');
          expect(resposta.body.retorno[0]).toHaveProperty('idnaturezaretencaofonte');
          expect(resposta.body.retorno[0]).toHaveProperty('contador');
          expect(resposta.body.retorno[0]).toHaveProperty('dddcontador');
          expect(resposta.body.retorno[0]).toHaveProperty('telefonecontador');
          expect(resposta.body.retorno[0]).toHaveProperty('cce_rg');
          expect(resposta.body.retorno[0]).toHaveProperty('orgaoexpedicaorg');
          expect(resposta.body.retorno[0]).toHaveProperty('dataexpedicaorg');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroconselhoprofissional');
          expect(resposta.body.retorno[0]).toHaveProperty('aposentado');
          expect(resposta.body.retorno[0]).toHaveProperty('pensionista');
          expect(resposta.body.retorno[0]).toHaveProperty('numerocarteiraprofissional');
          expect(resposta.body.retorno[0]).toHaveProperty('gerarboleto');
          expect(resposta.body.retorno[0]).toHaveProperty('seriecarteiraprofissional');
          expect(resposta.body.retorno[0]).toHaveProperty('ufcarteiraprofissional');
          expect(resposta.body.retorno[0]).toHaveProperty('numerobeneficio');
          expect(resposta.body.retorno[0]).toHaveProperty('orgaobeneficio');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroinscricaotrabalhador');
          expect(resposta.body.retorno[0]).toHaveProperty('numerocarteiraorgaoclasse');
          expect(resposta.body.retorno[0]).toHaveProperty('renavam');
          expect(resposta.body.retorno[0]).toHaveProperty('inscricaomunicipal');
          expect(resposta.body.retorno[0].inscricaosubstitutotributario[0]).toHaveProperty('uf');
          expect(resposta.body.retorno[0].inscricaosubstitutotributario[0]).toHaveProperty('inscricaosubstitutotributario');
          expect(resposta.body.retorno[0].inscricaosubstitutotributario[0]).toHaveProperty('exclusivodifal');
          expect(resposta.body.retorno[0]).toHaveProperty('inscricaosuframa');
          expect(resposta.body.retorno[0]).toHaveProperty('idtiporesidencia');
          expect(resposta.body.retorno[0]).toHaveProperty('residentedesde');
          expect(resposta.body.retorno[0]).toHaveProperty('valoraluguel');
          expect(resposta.body.retorno[0]).toHaveProperty('maladireta');
          expect(resposta.body.retorno[0]).toHaveProperty('placaveiculo');
          expect(resposta.body.retorno[0]).toHaveProperty('veiculoquitado');
          expect(resposta.body.retorno[0]).toHaveProperty('valoroutrasrendas');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaooutrasrendas');
          expect(resposta.body.retorno[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0]).toHaveProperty('emailnfe');
          expect(resposta.body.retorno[0]).toHaveProperty('contato');
          expect(resposta.body.retorno[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0]).toHaveProperty('expostapoliticamente');
          expect(resposta.body.retorno[0]).toHaveProperty('relacaoexpostapoliticamente');
          expect(resposta.body.retorno[0]).toHaveProperty('emancipado');
          expect(resposta.body.retorno[0]).toHaveProperty('linkdocumento');
          expect(resposta.body.retorno[0]).toHaveProperty('prolabore');
          expect(resposta.body.retorno[0]).toHaveProperty('observacaovenda');
          expect(resposta.body.retorno[0]).toHaveProperty('receberemailmarketing');
          expect(resposta.body.retorno[0]).toHaveProperty('verbarebate');
          expect(resposta.body.retorno[0]).toHaveProperty('cidadenaturalidade');
          expect(resposta.body.retorno[0].cidadenaturalidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].conjuge[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0].cnae[0]).toHaveProperty('idcnae');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('idtipoendereco');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('endereco');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('complemento');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('caixapostal');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cidade');
          expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('idtipotelefone');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].telefone[0]).toHaveProperty('ramal');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('idreferenciapessoal');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('graurelacionamento');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0].referencia[0].pessoal[0]).toHaveProperty('datainclusao');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('idreferenciacomercial');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('empresa');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('contato');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0].referencia[0].comercial[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('idreferenciabancaria');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('agencia');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('conta');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('dataabertura');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('bancoboleto');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('gerente');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('cnpj_cpf_correntista');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('nomecorrentista');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('idtipoconta');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('operacaobancaria');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('idformapagamento');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('idtipochavepix');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0]).toHaveProperty('chavepix');
          expect(resposta.body.retorno[0].referencia[0].bancaria[0].banco[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('idreferenciafinanceira');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('inicioexperienciacredito');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('localexperiencia');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('planoexperiencia');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('possuicartaofinanceira');
          expect(resposta.body.retorno[0].referencia[0].financeira[0]).toHaveProperty('valorprestacao');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('iddadosempregaticio');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresacnpj');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('ddd');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresa');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('idramoatividade');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresacep');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresaendereco');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresanumero');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresabairro');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresacomplementoendereco');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('admissao');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('salario');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('dtcomprovante');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('idtipocomprovante');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresasetor');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('empresacontato');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('confirmadopor');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('desligamento');
          expect(resposta.body.retorno[0].empregaticio[0]).toHaveProperty('cargo');
          expect(resposta.body.retorno[0].empregaticio[0].empresacidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].empregaticio[0].cbo[0]).toHaveProperty('idcbofamilia');
          expect(resposta.body.retorno[0].empregaticio[0].cbo[0]).toHaveProperty('idcbo');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('iddependente');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('datanascimento');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('idgrauparentesco');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('idtiposexo');
          expect(resposta.body.retorno[0].dependente[0]).toHaveProperty('deduzirimpostoirpf');
          expect(resposta.body.retorno[0].infcomplementar[0]).toHaveProperty('idpessoainformacoes');
          expect(resposta.body.retorno[0].infcomplementar[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].infcomplementar[0]).toHaveProperty('datamovimento');
          expect(resposta.body.retorno[0].infcomplementar[0]).toHaveProperty('idusuario');
          expect(resposta.body.retorno[0].rota[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0].rota[0].local_entrega[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].rota[0].local_entrega[0]).cidade[0].toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].rota[0].local_entrega[0]).cidade[0].toHaveProperty('cidade_nome');
        });
    });
  });