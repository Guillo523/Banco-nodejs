interface Burrito {
    getDescription(): string;
    getPrice(): number;
}

class BurritoMaiz implements Burrito {
    public getDescription(): string {
        return "Tortilla de Maiz";
    }

    public getPrice(): number {
        return 5000;
    }
}

class BurritoTradicional implements Burrito {
    public getDescription(): string {
        return "Tortilla Tradicional";
    }  

    public getPrice(): number {  
        return 4000;      
    }
}

abstract class Ingrediente implements Burrito {
    protected burrito: Burrito;
    
    constructor(burrito: Burrito) {
        this.burrito = burrito
    }

    public getDescription(): string {
        return this.burrito.getDescription() + " Nuevo Ingrediente";        
    }

    public getPrice(): number {
        return this.burrito.getPrice() + 0;
    }
}

class Carne extends Ingrediente {
    
    constructor(burrito: Burrito) {
        super(burrito)
    }

    public getDescription(): string {
        return this.burrito.getDescription() + " Carne";
    }

    public getPrice(): number {
        return this.burrito.getPrice() + 1500;
    }
}

class Mozzarella extends Ingrediente {

    constructor(burrito: Burrito) {
        super(burrito)
    }

    public getDescription(): string {
        return this.burrito.getDescription() + " Mozzarella";
    }

    public  getPrice(): number {
        return this.burrito.getPrice() + 1200;
    }
}

class PicoGallo extends Ingrediente {

    constructor(burrito: Burrito) {
        super(burrito)
    }
    public getDescription(): string {
        return this.burrito.getDescription() + " Pico Gallo";
    }

    public getPrice(): number {
        return this.burrito.getPrice() + 1000;
    }
}

class BaseBurritoFactory {
    public static MakeBurrito(burrito: string): Burrito {
        switch(burrito) {
            case "Tradicional": {
                return new BurritoTradicional();
            }
            case "Maiz": {
                return new BurritoMaiz();
            }
        }
    }
}

class IngredienteFactory {
    public static MakeIngrediente(ingrediente: string, burrito: Burrito): Burrito {
        switch(ingrediente) {
            case "Carne":{
                return new Carne(burrito);
            }
            case "PicoGallo":{
                return new PicoGallo(burrito);
            }
            case "Mozzarella":{
                return new Mozzarella(burrito);
            }
        }
    }
}

/*
const burrito = new Carne (new Mozzarella(new BurritoTradicional()));

const burrito2 = new PicoGallo (new BurritoMaiz());

console.log(burrito.getDescription());
console.log(burrito.getPrice());
console.log(burrito2.getDescription());
console.log(burrito2.getPrice());
console.log('total venta: $' + (burrito.getPrice() + burrito2.getPrice()));
*/

let json = {
    "base": "Maiz",
    "ingredientes": [
        "Carne",
        "Mozzarella"
    ]
}

let burrito = BaseBurritoFactory.MakeBurrito(json.base)
console.log(burrito.getDescription());

for(let index in json.ingredientes) {
    console.log(json.ingredientes[index])
    let ingrediente = IngredienteFactory.MakeIngrediente(json.ingredientes[index], burrito)
    burrito = ingrediente
}

console.log(burrito.getDescription());
console.log(burrito.getPrice());