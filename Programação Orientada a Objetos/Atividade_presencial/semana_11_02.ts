/** 
 * => O id não pode ser modificado após a criação
 * => Atributo credito é privado
 * => A classe dever ter um método de acesso que não permita valores
igual ou menor que zero (0), caso isso ocorra deverá receber um valor padrão 1.
*/

class Estudante {
    private credito: number;

    constructor(
        public readonly id:number,
        public nome: string
    ){
        this.credito = 1;
    }

    public get creditos():number{
        return this.credito;
    }

    public set creditos(val:number){
        if (val>0) {
            this.creditos = val;
        } else {
            this.credito = 1;
        }
    }

    public detalhar(): void {
        console.log('${this.id} ${this.nome}  ${this.credito}')
    }
}

let e1 = new Estudante(1, "Isaac");
let e2 = new Estudante(2, "João");
e1.creditos = 20;
e1.creditos = -10;
e2.creditos = -20;
e2.creditos = 30;
e1.detalhar();
e2.detalhar();
