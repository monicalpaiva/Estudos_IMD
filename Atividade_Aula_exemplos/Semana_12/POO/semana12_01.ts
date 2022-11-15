class Cidade{
    constructor(
        readonly nome:string){}
}

class Pessoa{

    constructor(
        nome: string,
        cidade: Cidade){}
}

class Animal{
    constructor(
    nome: string,
    dono: Pessoa){}

}

const natal = new Cidade("Natal");

const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);


console.log(toto.dono)