describe('Testes utilizando os Matches do Jest', () => {
    it('Deve retornar a soma de 1 + 1 com toBe', () => {
        expect(1+1).toBe(2);
    })
    
    it('Deve retornar a igualdade de um objeto com toEqual', () => {
        const obj1 = {one:1}
        obj1.two = 2;
        expect(obj1).toEqual({one:1, two:2});
    })
    
    it('Deve retornar se a string "e" existe na palavra "Teste" com o toMatch', () => {
        expect('Teste').toMatch(/e/)
    })
})


