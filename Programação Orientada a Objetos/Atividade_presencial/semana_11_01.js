var MesaDeJantar = /** @class */ (function () {
    function MesaDeJantar(material, lugares, preco) {
        this.material = material;
        if (lugares != undefined) {
            this.lugares = lugares;
        }
        else {
            this.lugares = 4;
        }
        if (preco != undefined) {
            this.preco = preco;
        }
        else {
            this.preco = 0;
        }
    }
    MesaDeJantar.prototype.detalhar = function () {
        console.log(this.material, this.lugares, this.preco);
    };
    return MesaDeJantar;
}());
var mesa1 = new MesaDeJantar("Metal", 8, 100);
mesa1.detalhar();
var mesa2 = new MesaDeJantar("Madeira", 6);
mesa2.detalhar();
var mesa3 = new MesaDeJantar("Vidro");
mesa3.detalhar();
