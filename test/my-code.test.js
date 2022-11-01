import {soma, subtracao, divisao, multiplicacao} from '../test/my-code'

/* describe('Testes de calculadora com valores inteiros', () => {
     test('Deve retornar a soma de 1 + 1 com toBe', () => {
        expect(1+1).toBe(2); //asserção/afirmação
    })
    
    it('Deve retornar a igualdade de um objeto com toEqual', () => {
        const obj1 = {one:1}
        obj1.two = 2;
        expect(obj1).toEqual({one:1, two:2}); //verifica se dentro desse objeto existe one: 1 e two: 2 / comparação
    })
    
    it('Deve retornar se a string "e" existe na palavra "Teste" com o toMatch', () => {
        expect('Teste').toMatch(/e/) //verifica se existe a string dentro de outra string
    }) 
})*/


describe('Testes de calculadora com valores inteiros', () => {
    it('Deve retornar a soma de 2 valores inteiros', () => {
       const esperado = 30;
       const retornado = soma(10,20);
       expect(retornado).toBe(esperado);
    })

    it('Deve retornar a subtração de 2 valores inteiros', () => {
        const esperado = 30;
        const retornado = subtracao(30,0);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a divisão de 2 valores inteiros', () => {
        const esperado = 30;
        const retornado = divisao(60,2);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a multiplicação de 2 valores inteiros', () => {
        const esperado = 30;
        const retornado = multiplicacao(30,1);
        expect(retornado).toBe(esperado);
     })
})

describe('Testes de calculadora com valores flutuantes', () => {
    it('Deve retornar a soma de 2 valores flutantes', () => {
       const esperado = 30.0;
       const retornado = soma(15.5,14.5);
       expect(retornado).toBe(esperado);
    })

    it('Deve retornar a subtração de 2 valores flutuantes', () => {
        const esperado = 30.0;
        const retornado = subtracao(30.2, 0.2);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a divisão de 2 valores flutuantes', () => {
        const esperado = 30.0;
        const retornado = divisao(60.0, 2.0);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a multiplicação de 2 valores flutuantes', () => {
        const esperado = 30.0;
        const retornado = multiplicacao(60,0.5);
        expect(retornado).toBe(esperado);
     })
})



describe('Testes de calculadora com valores negativos', () => {
    it('Deve retornar a soma de 2 valores negativos', () => {
       const esperado = -30;
       const retornado = soma(-15, -15);
       expect(retornado).toBe(esperado);
    })

    it('Deve retornar a subtração de 2 valores negativos', () => {
        const esperado = -30;
        const retornado = subtracao(-60, -30);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a divisão de 2 valores negativos', () => {
        const esperado = -30;
        const retornado = divisao(-60, 2);
        expect(retornado).toBe(esperado);
     })

     it('Deve retornar a multiplicação de 2 valores negativos', () => {
        const esperado = -30;
        const retornado = multiplicacao(-10,3);
        expect(retornado).toBe(esperado);
     })
})