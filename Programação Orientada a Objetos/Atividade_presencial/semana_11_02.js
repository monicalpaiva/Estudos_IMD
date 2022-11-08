/**
 * => O id não pode ser modificado após a criação
 * => Atributo credito é privado
 * => A classe dever ter um método de acesso que não permita valores
igual ou menor que zero (0), caso isso ocorra deverá receber um valor padrão 1.
*/
var Estudante = /** @class */ (function () {
    function Estudante(id, nome) {
        this.id = id;
        this.nome = nome;
        this.credito = 1;
    }
    Object.defineProperty(Estudante.prototype, "_creditos", {
        get: function () {
            return this.credito;
        },
        set: function (val) {
            if (val > 0) {
                this._creditos = val;
            }
            else {
                this.credito = 1;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.detalhar = function () {
        console.log('${this.id} ${this.nome}  ${this.credito}');
    };
    return Estudante;
}());
var e1 = new Estudante(1, "Isaac");
var e2 = new Estudante(2, "João");
e1.creditos = 20;
e1.creditos = -10;
e2.creditos = -20;
e2.creditos = 30;
e1.detalhar();
e2.detalhar();
