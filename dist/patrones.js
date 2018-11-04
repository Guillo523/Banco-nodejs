class NormalFly {
    fly() {
        console.log("El pajaro vuela normal");
    }
}
class BadFly {
    fly() {
        console.log("El pajaro vuela mal");
    }
}
class NoFly {
    fly() {
        console.log("El pajaro no vuela");
    }
}
class FastFly {
    fly() {
        console.log("El pajaro vuela rápido");
    }
}
class Animal {
    fly() {
        this.flyBh.fly();
    }
    setFly(flyBh) {
        this.flyBh = flyBh;
    }
}
class Colibri extends Animal {
}
class Condor extends Animal {
}
class Pato extends Animal {
}
class AnimalFactory {
    MakeAnimal(animal) {
        switch (animal) {
            case "colibri": {
                let colibri = new Colibri();
                colibri.setFly(new FastFly());
                return colibri;
            }
            case "colibri aporriado": {
                let colibri = new Colibri();
                colibri.setFly(new BadFly());
                return colibri;
            }
            case "colibri muerto": {
                let colibri = new Colibri();
                colibri.setFly(new NoFly());
                return colibri;
            }
        }
    }
}
let factory = new AnimalFactory();
let colibriNormal = factory.MakeAnimal("colibri");
colibriNormal.fly();
let colibriAporriado = factory.MakeAnimal("colibri aporriado");
colibriAporriado.fly();
let colibriMuerto = factory.MakeAnimal("colibri muerto");
colibriMuerto.fly();
//# sourceMappingURL=patrones.js.map