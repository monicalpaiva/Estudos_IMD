var Estudante = /** @class */ (function () {
    function Estudante(_id, //o id não pode ser modificado após a criação
    _nome) {
        this._id = _id;
        this._nome = _nome;
        this._credito = 1;
    }
    Object.defineProperty(Estudante.prototype, "credito", {
        get: function () {
            return this._credito;
        },
        set: function (credito) {
            if (credito <= 0) {
                this._credito = 1;
            }
            else {
                this._credito = credito;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.detalhar = function () {
        console.log("\n            INFORMA\u00C7\u00D5ES:\n            ID: ".concat(this._id, ",\n            Nome: ").concat(this._nome, ",\n            Credito: ").concat(this._credito, "\n        "));
    };
    return Estudante;
}());
var aluno1 = new Estudante();
aluno1._credito = -2;
aluno1.detalhar();
var aluno2 = new Estudante();
aluno2._credito = 2;
aluno2.detalhar();
