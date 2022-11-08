class Carro {
    modelo: string;
    _cor: string;
    placa: string;
    numPlaca: number;

    getCor(): string {
        return this._cor;
    }

    setCor(cor:string): void {
        this._cor = cor;
    }
}

let c = new Carro();
c.setCor("Azul");
console.log(c.getCor());