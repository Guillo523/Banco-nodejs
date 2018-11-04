interface Fly {
    fly(): void;
}

class NormalFly implements Fly {
    public fly(): void {
        console.log("El pajaro vuela normal");
    }
}

class BadFly implements Fly {
    public fly(): void {
        console.log("El pajaro vuela mal");
    }
}

class NoFly implements Fly {
    public fly(): void {
        console.log("El pajaro no vuela");
    }
}

class FastFly implements Fly {
    public fly(): void {
        console.log("El pajaro vuela rápido");
    }
}

class Animal {
    private flyBh: Fly;
    
    public fly(): void {
        this.flyBh.fly();
    }
    
    public setFly(flyBh: Fly): void {
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
    public MakeAnimal(animal: string): Animal {
        switch(animal) {
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




