"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(_numCta, _cc, _nom) {
        this.cc = _cc;
        this.nom = _nom;
        this.saldo = 0;
        this.numCta = _numCta;
    }
    getSaldo() {
        return this.saldo;
    }
    validar2() {
        if (String(this.numCta).length !== 9) {
            return false;
        }
        else {
            const numeros = String(this.numCta).split('');
            let suma = 0;
            for (let i = 0; i < numeros.length; i++) {
                suma = Number(numeros[i]) * i;
            }
            if (suma % 11 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    depositar(deposito) {
        if (deposito <= 0) {
            return false;
        }
        else {
            this.saldo = this.saldo + deposito;
            return true;
        }
    }
    retirar(retiro) {
        if (retiro <= 0) {
            return false;
        }
        if (this.saldo >= retiro) {
            this.saldo = this.saldo - retiro;
            return true;
        }
        else {
            return false;
        }
    }
    transferir(valor, cuenta) {
        if (this.retirar(valor) === true && cuenta.depositar(valor) === true) {
            return true;
        }
        else {
            return false;
        }
    }
    validar() {
        if (String(this.numCta).length !== 9) {
            return false;
        }
        else {
            let valor = String(this.numCta);
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                let reSum = Number(valor[i]) * (i + 1);
                sum = sum + reSum;
            }
            let resul = sum % 11;
            if (resul === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map