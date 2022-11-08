class Pessoa {
    Pessoa(nome, email, nascimento){
        this.nome = new nome;
        this.email = new email;
        this.nascimento = new nascimento;
    }

}

class Empregado extends Pessoa {
    salario;
    constructor(nome, email, nascimento){
        super(nome, email, nascimento);
        this.salario = salario
    }
}

export {Pessoa, Empregado}