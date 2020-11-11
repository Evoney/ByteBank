// Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){

        if(this.constructor == Conta){
           throw new Error("You shouldn´t instantiate a type Conta object");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoCliente){
        if (novoCliente instanceof Cliente)
         this._cliente =  novoCliente;
    }
    
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }
    
    // Método Abstrato
    sacar(valor){
        throw new Error("Abstract Method");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa*valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}