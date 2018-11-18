let db = {
    francisco: {
        password: "0000",
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
};
class Info {
    static getSaldo(user) {
        return db[user].balance;
    }
}
class Validator {
    static validarUser(user, password) {
        try {
            return db[user].password === password;
        }
        catch (error) {
            return false;
        }
        return false;
    }
    static validarBalance(user, withdrawal) {
        return db[user].balance >= withdrawal;
    }
}
class Saludo {
    static saludar() {
        return "hola parcero, queres money";
    }
}
class Operations {
    static retirar(user, withdrawal) {
        db[user].balance -= withdrawal;
    }
}
class Resultado {
    static generaRecibo(user, withdrawal) {
        return `usted retiro ${withdrawal} y quedaste marika con ${db[user].balance}`;
    }
    static generaErr() {
        return "estas llevado loka deja de trabarte";
    }
}
class Facade {
    static retirarDinero(user, password, withdrawal) {
        Saludo.saludar();
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
            console.log(Resultado.generaErr());
        }
        else {
            Operations.retirar(user, withdrawal);
            console.log(Resultado.generaRecibo(user, withdrawal));
        }
    }
    static consultarSaldo(user, password) {
        Saludo.saludar();
        if (!Validator.validarUser(user, password)) {
            console.log(Resultado.generaErr());
        }
        else {
            console.log(`Su saldo es: ${Info.getSaldo(user)}`);
        }
    }
}
Facade.retirarDinero("jhon", "8888", 30);
Facade.consultarSaldo("jhon", "8888");
//# sourceMappingURL=facade.js.map