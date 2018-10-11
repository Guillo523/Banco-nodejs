import "mocha";
import "should";
import {Account} from "./account"

describe("nombre paquete", () => {
    it("deberia funcionar", () => {
        const resultado = true;
        resultado.should.be.equal(true);
    });

    it("es buena",() => {
        const hola = 3;
        hola.should.be.is.Number()
    });
});

describe("pruebaCuenta", () => {
    let prueba1: Account;

    beforeEach(() => prueba1 = new Account(11223344155,"8.434.588", "Guillermo"));

    it("should have all", () => {
        prueba1.cc.should.be.not.null()
        prueba1.nom.should.be.not.null()
    })    
})

describe("pruebaTarea", () => {
    let cuentaGmo: Account;

    beforeEach(() => cuentaGmo = new Account(11223344155,"8434588", "Guilermo"));

    describe("depositar", () => {
        it ("esto deberia depositar 500 Us", () => {
            const deposito = 500;
            const saldoActual = cuentaGmo.getSaldo();

            cuentaGmo.depositar(deposito);
            cuentaGmo.getSaldo().should.be.equal(saldoActual + deposito)
        });
        it ("esto no deberia depositar numeros negativos", () => {
            const cuentaGmo = new Account(11223344155,"8434588", "Guillermo");
            const resultado = cuentaGmo.depositar(-200);

            resultado.should.be.equal(false);
        })

    })
    describe("retirar", () => {

        it ("esto deberia retirar 400 Us", () =>{
            const cuentaGmo = new Account(11223344155,"8434588", "Guilermo");
            cuentaGmo.depositar(500);
            const retiro = 400;
            const saldoActual = cuentaGmo.getSaldo();
            
            cuentaGmo.retirar(retiro);
            cuentaGmo.getSaldo().should.be.equal(saldoActual - retiro)

        });
        it ("Esto no deberia retirar 700 Us", () => {
            const cuentaGmo = new Account(11223344155,"8434588", "Guilermo");
            cuentaGmo.depositar(500);
            const retiro = 700;
            const resultado = cuentaGmo.retirar(retiro);
            
            resultado.should.be.equal(false);            
        });
        it ("Esto no deberia deberia retirar negativos", () =>{
            const cuentaGmo = new Account(11223344155,"8434588", "Guilermo");
            const resultado = cuentaGmo.retirar(-300);

            resultado.should.be.equal(false);
        })

    })
    describe("transferir", () =>{
        it("Debe poder transferiri 300 Us", () => {
            const cuenta1 = new Account(11223344155,"43169974", "juliana");
            const cuenta2 = new Account(11223344155,"71245633", "Carlos");

            cuenta1.depositar(600); 
            const resultado = cuenta1.transferir(400, cuenta2);
            
            resultado.should.be.equal(true);

        })

        it ("no debe transferir un valor superior al total de la cuenta", () =>{
            const cuenta1 = new Account(11223344155,"43169974", "juliana");
            const cuenta2 = new Account(11223344155,"71245633", "Carlos");

            cuenta1.depositar(500);
            const resultado = cuenta1.transferir(700, cuenta2);

            resultado.should.be.equal(false);
        })
        it("no puede transferir un valor negativo", () =>{
            const cuenta1 = new Account(11223344155,"43169974", "juliana");
            const cuenta2 = new Account(11223344155,"71245633", "Carlos");

            cuenta1.depositar(200);
            const resultado = cuenta1.transferir(-250, cuenta2);

            resultado.should.be.equal(false);
        })
    })
    describe("validarCuenta", () =>{
        it("la cuenta es incorrecta porque la longitud es diferente de 9", () =>{
            const cuenta = new Account(11223344155,"8434588", "sergio");
            const resultado = cuenta.validar();

           resultado.should.be.equal(false);

        })
        it ("la cuneta es correcta porque la longitud es igual a 9", () =>{
            const cuenta = new Account(834458901,"6665544", "maria");
            const resul = cuenta.validar();

            resul.should.be.equal(true);
        })
    })
     
})
