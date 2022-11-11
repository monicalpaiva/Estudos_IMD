class ContaCorrente{
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;
 
    set nome( nome:string ){
        this.nome_correntista = nome;
    }

    set cpf(cpf:string){
        this.cpf_correntista = cpf;
    }
 
    depositar(valor:number){
        this.saldo = this.saldo + valor;
    }
 
    sacar(valor:number){
        this.saldo = this.saldo - valor;
    }
   
    mostrarInformcoes (){ 
        console.log(`INFORMAÇÕES:
        Nome: ${this.nome_correntista},
        CPF: ${this.cpf_correntista},
        Saldo: ${this.saldo}
        `)

    }
}
 
let conta = new ContaCorrente();
conta.nome_correntista = "Monica Lima de Paiva";
conta.cpf_correntista = "000-555-444-98";
conta.saldo = 500.00;
 
conta.depositar(30);
conta.sacar(100);
conta.mostrarInformcoes();
