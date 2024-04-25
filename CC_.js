import { cliente } from "./Cl.js";


export class ContaCorrente{
 static contas =0;
    agencia;
    _cliente
    _saldo = 0;
        set cliente(novovalor){ 
            if(novovalor instanceof cliente)
            this._cliente =novovalor

        }

        sacar(valor){
            if(this._saldo >= valor){
                this._saldo -= valor
            }
            


        }
        deposito(valor){
            if(valor > 0){
                this._saldo += valor
            }
        }
        trasnf(valor,conta ){
            const valorsaque = this.sacar(valor)
            conta.deposito(valorsaque)

        }
        constructor(agencia,cliente){
            this.agencia = agencia;
            this.cliente = cliente;
            ContaCorrente.contas+=1
    
        }
}