import {Pessoa, Empregado} from "../test/Pessoa"
var objTestePessoa1 = new Pessoa("Marcos Vinicius", "marcos.vinicius@gmail.com", new Date(1992,12,20));
var objTestePessoa2 = new Pessoa("Marcos Vinicius", "marcos.vinicius@gmail.com", new Date(1992,12,20));

describe('Testes com Pessoa', ()=> { 
    test('Deve retornar a igualdade do obj 1 com o obj 2 sendo como resultado verdadeiro', ()=> {
        
        expect(objTestePessoa1.email).toBe('marcos.vinicius@gmail.com');
        expect(objTestePessoa1.nome).toBe('Marcos Vinicius');
        expect(objTestePessoa1.email).toBe('marcos.vinicius@gmail.com');
        expect(objTestePessoa1.nascimento).toEqual(new Date(1992,12,20));

        expect(objTestePessoa1).toEqual(objTestePessoa2);
    })

    var EmpregadoTest = new Empregado("Marcos Vinicius", "marcos.vinicius@gmail.com", new Date(1992,12,20), 1000);
    test('Deve retornar propriedades da classe empregado', () => {
        
        expect(EmpregadoTest.nome).toBe("Marcos Vinicius");
        expect(EmpregadoTest.email).toBe("marcos.vinicius@gmail.com");
        expect(EmpregadoTest.nascimento).toEqual(new Date(1992,12,20));
        expect(EmpregadoTest.salario).toEqual(1000);
    })
})