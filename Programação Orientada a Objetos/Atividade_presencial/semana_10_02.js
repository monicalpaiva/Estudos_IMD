var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    //get recupera o valor
    //set alterar o valor
    ContaCorrente.prototype.getnome_correntista = function () {
        return this.nome_correntista;
    };
    ContaCorrente.prototype.setnome_correntista = function (nome_correntista) {
        this.nome_correntista = nome_correntista;
    };
    ContaCorrente.prototype.getcpf_correntista = function () {
        return this.cpf_correntista;
    };
    ContaCorrente.prototype.setcpf_correntista = function (cpf_correntista) {
        this.cpf_correntista = cpf_correntista;
    };
    ContaCorrente.prototype.getsaldo = function () {
        return this.saldo;
    };
    ContaCorrente.prototype.setsaldo = function (deposito) {
        this.saldo = deposito;
    };
    return ContaCorrente;
}());
var nome = new ContaCorrente();
nome.setsaldo(10);
console.log(nome.getsaldo());
