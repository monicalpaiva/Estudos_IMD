var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    ContaCorrente.prototype.Nome = function (Nome) {
        this.nome_correntista = Nome;
    };
    ContaCorrente.prototype.cpf = function (cpf) {
        this.cpf_correntista = cpf;
    };
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    ContaCorrente.prototype.mostrarInformcoes = function () {
        console.log("INFORMA\u00C7\u00D5ES:\n        Nome: ".concat(this.nome_correntista, ",\n        CPF: ").concat(this.cpf_correntista, ",\n        Saldo: ").concat(this.saldo, "\n        "));
    };
    return ContaCorrente;
}());
var conta = new ContaCorrente();
conta.nome_correntista = "Monica Lima de Paiva";
conta.cpf_correntista = "000-555-444-98";
conta.saldo = 500.00;
conta.depositar(30);
conta.sacar(100);
conta.mostrarInformcoes();
