class Pessoa {
    constructor(nome, email, nascimento){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
    }

}

class Empregado extends Pessoa {
    salario;
    constructor(nome, email, nascimento, salario){
        super(nome, email, nascimento);
        this.salario = salario
    }
}

export {Pessoa, Empregado}