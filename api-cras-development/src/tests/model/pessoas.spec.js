/* import { describe } from '@hapi/joi/lib/base';
import { it } from 'faker-br/lib/locales'; */
import { describe, expect, it, jest } from '@jest/globals';
import Pessoa from '../../models/Pessoa';
import PessoaController from '../../controllers/PessoaController.js';

describe(' Deve retornar testes de unidade de pessoa', () => {
    afterEach(() => jest.clearAllMocks());
    const dataPessoa = new Date();

    const objetoPessoa ={
        nome: 'Priscila',
        cpf: '000.000.000-00',
        nit: '2525',
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: 'Brasil',
        cep: '76980-000',
        logradouro: 'Rua dos bobos',
        numero: '0',
        bairro: 'Sem bairro',
        cidade: 'Vilhena',
        estado: 'RO',
        telefone: '3322-2349',
        telefoneContato: '(69)9 7070-7070'
    };

    it('Deve instanciar um nova pessoa', () => {
        const pessoa = new Pessoa(objetoPessoa);
        expect(pessoa).toEqual(expect.objectContaining(objetoPessoa));
    });

    it('Deve fazer uma chamada simulada de cadastro no BD', () => {
        const pessoa = new Pessoa(objetoPessoa);

        PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
        nome: 'Priscila',
        cpf: '000.000.000-00',
        nit: '2525',
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: 'Brasil',
        cep: '76980-000',
        logradouro: 'Rua dos bobos',
        numero: '0',
        bairro: 'Sem bairro',
        cidade: 'Vilhena',
        estado: 'RO',
        telefone: '3322-2349',
        telefoneContato: '(69)9 7070-7070'
        });

        const retorno = PessoaController.cadastrarPessoa();
        expect (retorno).toEqual(expect.objectContaining({dataNascimento: expect.any(Date), ...objetoPessoa,}));
    });

})