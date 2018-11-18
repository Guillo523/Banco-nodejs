let db: any = {
    francisco: {
        password:"0000",
        balance: 10
    },
    guillermo: {
        password: "1234",
        balance: 22
    },
    jorge: {
        password: "7777",
        balance: 11
    },
    jhon: {
        password: "8888",
        balance: 33
    }
}

class Info {
    public static getSaldo(user: string): number {
        return db[user].balance
    }
}

class Validator {
    public static validarUser(user: string, password: string): boolean {
        try {
            return db[user].password === password
        } catch (error) {
            return false
        }
        
        return false
    }

    public static validarBalance(user: string, withdrawal: number): boolean {
        return db[user].balance >= withdrawal
    }
}

class Saludo {
    public static saludar(): string {
        return "hola parcero, queres money"
    }
}

class Operations {
    public static retirar(user: string, withdrawal: number): void {
        db[user].balance -= withdrawal
    }
}

class Resultado {
    public static generaRecibo(user: string, withdrawal: number): string {
        return `usted retiro ${withdrawal} y quedaste marika con ${db[user].balance}` 
    }

    public static generaErr(): string {
        return "estas llevado loka deja de trabarte"
    }
}

class Facade {
    public static retirarDinero(user: string, password: string, withdrawal: number): void {
        Saludo.saludar()
        /*if (Validator.validarUser(user, password))  {
            if (Validator.validarBalance(user, withdrawal)) {
                Operations.retirar(user, withdrawal)
                console.log(Resultado.generaRecibo(user, withdrawal))
            } else {
                console.log(Resultado.generaErr())    
            }
        } else {
            console.log(Resultado.generaErr())
        }*/
        if (!Validator.validarUser(user, password) || !Validator.validarBalance(user, withdrawal)) {
            console.log(Resultado.generaErr())
        } else {
            Operations.retirar(user, withdrawal)
            console.log(Resultado.generaRecibo(user, withdrawal))
        }
    }

    public static consultarSaldo(user: string, password: string): void {
        Saludo.saludar()
        if (!Validator.validarUser(user, password)) {
            console.log(Resultado.generaErr());
        } else {
            console.log(`Su saldo es: ${Info.getSaldo(user)}`);
        }
    }
}

Facade.retirarDinero("jhon", "8888", 30)
Facade.consultarSaldo("jhon", "8888")