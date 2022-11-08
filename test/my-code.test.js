import {soma, subtracao, divisao, multiplicacao, potencia, areaTriangulo, areaRetangulo} from '../test/my-code'

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

     it('Deve retornar a potência quadrada de um valor inteiro', () => {
      const esperado = 25;
      const retornado = potencia(5);
      expect(retornado).toBe(esperado)

   })

   it('Deve calcular a área de um triângulo com valores inteiros', () => {
      const esperado = 8;
      const retornado = areaTriangulo(4,4);
      expect(retornado).toBe(esperado)

   })

   it('Deve calcular a área de um retângulo com valores inteiros', () => {
      const esperado = 16;
      const retornado = areaRetangulo(4,4);
      expect(retornado).toBe(esperado)

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

     it('Deve retornar a potência quadrada de um valor flutuante', () => {
      const esperado = 2.25;
      const retornado = potencia(1.5);
      expect(retornado).toBe(esperado)

   })

   it('Deve calcular a área de um triângulo com valores flutuantes', () => {
      const esperado = 2.55;
      const retornado = areaTriangulo(2.55, 2);
      expect(retornado).toBeCloseTo(esperado) //arredonda valores

   })

   it('Deve calcular a área de um retângulo com valores flutuantes', () => {
      const esperado = 4.41;
      const retornado = areaRetangulo(2.1,2.1);
      expect(retornado).toBe(esperado)

   })
})



describe('Testes de calculadora com valores negativos', () => {
    it('Deve retornar a soma de 2 valores negativos', () => {  //it.skip para pular o teste
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

     it('Deve retornar a potência quadrada de um valor negativo', () => {
      const esperado = 100;
      const retornado = potencia(-10);
      expect(retornado).toBe(esperado)

   })
})