import Atendimento from '../../models/Atendimento.js'
import { describe, expect, it, jest } from '@jest/globals';
import mongoose from 'mongoose';

describe(' Deve retornar os testes de unidade de atendimento', () => {
    afterEach(() => jest.clearAllMocks());
    const oid = mongoose.Schema.Types.ObjectId.get();
    const dataAtendimento = new Date();

    const objetoAtendimento ={
        oid_pessoa: oid,
        nome: "Priscila",
        cpf: '000.000.000-00',
        nit: '2525',
        tipo: 'RG',
        observacao: 'Nenhuma',
        dataAtendimento: dataAtendimento,
    };

    it('Deve instanciar um novo atendimento', () => {
        const atendimento = new Atendimento(objetoAtendimento);
        expect(atendimento).toEqual(expect.objectContaining(objetoAtendimento));
        expect(atendimento).toHaveProperty('nome','Priscila')
    });

})