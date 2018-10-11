export class Account {

    public cc: string
    public nom: string
    private saldo: number
    private numCta: number
    
    constructor(_numCta: number, _cc: string, _nom: string)
    {
        this.cc = _cc
        this.nom = _nom
        this.saldo = 0
        this.numCta = _numCta
    }   

    public getSaldo() {

        return this.saldo;

    }

    public validar2() {
        if (String(this.numCta).length !== 9) {
            return false;
        } else {
            const numeros = String(this.numCta).split('');
            let suma = 0;
            for (let i = 0; i < numeros.length; i++) {
                suma = Number(numeros[i]) * i;
            }
            if (suma % 11 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    public depositar(deposito: number) {
        
        if(deposito <= 0){
            return false;
        }else{
            this.saldo = this.saldo + deposito;
            return true;
        }

        
    }

    public retirar(retiro: number){

        if (retiro <= 0){
            return false;
        }

        if (this.saldo >= retiro ){
            this.saldo = this.saldo - retiro;
            return true;
        } else {
            return false;
        }
    }

    public transferir(valor: number, cuenta: Account){

        if(this.retirar(valor) === true && cuenta.depositar(valor) === true){
            return true
        }else{
            return false
        }

    }

    public validar(){
        if(String(this.numCta).length !== 9) {
            return false                      
        }else{
            let valor = String(this.numCta);                    
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                let reSum = Number(valor[i])*(i+1);
                sum = sum + reSum;                
            } 
            
                       
            let resul = sum % 11;
            if( resul === 0){
                return true;
            }else{
                return false;
            }


            
        }
        
    }
}

