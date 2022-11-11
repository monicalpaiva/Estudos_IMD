var MesaDeJantar = /** @class */ (function () {
    function MesaDeJantar(material, lugares, preco) {
        this._material = material;
        if (lugares == undefined) {
            this._lugares = 2;
        }
        else {
            this._lugares = lugares;
        }
        if (preco == undefined) {
            this._preco = 0;
        }
        else {
            this._preco = preco;
        }
    }
    MesaDeJantar.prototype.detalhar = function () {
        console.log("INFORMA\u00C7\u00D5ES:\n                    Material: ".concat(this._material, ",\n                    Lugares: ").concat(this._lugares, ",\n                    Pre\u00E7o: ").concat(this._preco, "\n                    "));
    };
    return MesaDeJantar;
}());
var mesa1 = new MesaDeJantar("Metal", 8, 100);
mesa1.detalhar();
var mesa2 = new MesaDeJantar("Madeira", 6);
mesa2.detalhar();
var mesa3 = new MesaDeJantar("Vidro");
mesa3.detalhar();
