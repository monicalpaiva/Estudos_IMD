class Estudante {
    private _credito: number; //O atributo credito é privado
 
    constructor(
        readonly _id:string, //o id não pode ser modificado após a criação
        public _nome:string){
       
        this._credito = 1;
    }
   
    public get credito():number{
        return this._credito;
    }
 
    public set credito(credito:number){
        if (credito <= 0){
            this._credito = 1;
        }else{
            this._credito = credito;
        }
    }
 
    public detalhar(): void{
        console.log(`
            INFORMAÇÕES:
            ID: ${this._id},
            Nome: ${this._nome},
            Credito: ${this._credito}
        `)  
    }
}
 
let aluno1 = new Estudante();
aluno1._credito = -2;
aluno1.detalhar();
 
let aluno2 = new Estudante();
aluno2._credito = 2;
aluno2.detalhar();
