const soma = (a,b) => {return a + b}
const subtracao = (a,b) => {return a - b}
const divisao = (dividendo, divisor) => {
    if (divisor == 0) {
        throw new Erro ('Não é possível dividir por zero' + divisor);
    }
    return dividendo/divisor; }

const multiplicacao = (a,b) => {return a * b}
const potencia = (a) => {return Math.pow(a,2)}
const areaTriangulo = (a,b) => {return (a * b)/2}
const areaRetangulo = (a,b) => {return (a * b)}
const media = (val1, val2, val3) => {return (val1 + val2 + val3)/3};

export {soma, subtracao, divisao, multiplicacao, potencia, areaTriangulo, areaRetangulo, media}