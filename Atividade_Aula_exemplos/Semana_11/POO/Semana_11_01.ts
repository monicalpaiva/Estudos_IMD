class MesaDeJantar {
    _material: string;
    _lugares: number;
    _preco: number;
 
    constructor(material:string, lugares?: number, preco?: number){
       this._material= material;
 
       if (lugares == undefined){
        this._lugares = 2;
       }else{
        this._lugares = lugares;
       }
 
       if (preco == undefined){
        this._preco = 0;
       }else{
        this._preco = preco;
       }
    }
 
    detalhar(){
        console.log(`INFORMAÇÕES:
                    Material: ${this._material},
                    Lugares: ${this._lugares},
                    Preço: ${this._preco}
                    `)
    }
}
 
let mesa1 = new MesaDeJantar("Metal",8,100);
mesa1.detalhar();
let mesa2 = new MesaDeJantar("Madeira",6);
mesa2.detalhar();
let mesa3 = new MesaDeJantar("Vidro");
mesa3.detalhar();