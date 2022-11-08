var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getCor = function () {
        return this._cor;
    };
    Carro.prototype.setCor = function (cor) {
        this._cor = cor;
    };
    return Carro;
}());
var c = new Carro();
c.setCor("Azul");
console.log(c.getCor());
