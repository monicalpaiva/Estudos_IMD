class ContaCorrente{
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;
    
    //get recupera o valor
    //set alterar o valor

    getnome_correntista(): string{
        return this.nome_correntista;
    }

    setnome_correntista(nome_correntista: string): void {
        this.nome_correntista = nome_correntista;
    }

    getcpf_correntista(): string{
        return this.cpf_correntista;
    }

    setcpf_correntista(cpf_correntista: string): void {
        this.cpf_correntista = cpf_correntista;
    }

    getsaldo(): number{
        return this.saldo;
    }
}



var valor_para_deposito = 20;

let saldoFinal= ContaCorrente.getsaldo();
saldoFinal = saldoFinal + valor_para_deposito;
console.log(nome.getsaldo());