class BurritoMaiz {
    getDescription() {
        return "Tortilla de Maiz";
    }
    getPrice() {
        return 5000;
    }
}
class BurritoTradicional {
    getDescription() {
        return "Tortilla Tradicional";
    }
    getPrice() {
        return 4000;
    }
}
class Ingrediente {
    constructor(burrito) {
        this.burrito = burrito;
    }
    getDescription() {
        return this.burrito.getDescription() + " Nuevo Ingrediente";
    }
    getPrice() {
        return this.burrito.getPrice() + 0;
    }
}
class Carne extends Ingrediente {
    constructor(burrito) {
        super(burrito);
    }
    getDescription() {
        return this.burrito.getDescription() + " Carne";
    }
    getPrice() {
        return this.burrito.getPrice() + 1500;
    }
}
class Mozzarella extends Ingrediente {
    constructor(burrito) {
        super(burrito);
    }
    getDescription() {
        return this.burrito.getDescription() + " Mozzarella";
    }
    getPrice() {
        return this.burrito.getPrice() + 1200;
    }
}
class PicoGallo extends Ingrediente {
    constructor(burrito) {
        super(burrito);
    }
    getDescription() {
        return this.burrito.getDescription() + " Pico Gallo";
    }
    getPrice() {
        return this.burrito.getPrice() + 1000;
    }
}
class BaseBurritoFactory {
    static MakeBurrito(burrito) {
        switch (burrito) {
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
    static MakeIngrediente(ingrediente, burrito) {
        switch (ingrediente) {
            case "Carne": {
                return new Carne(burrito);
            }
            case "PicoGallo": {
                return new PicoGallo(burrito);
            }
            case "Mozzarella": {
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
};
let burrito = BaseBurritoFactory.MakeBurrito(json.base);
console.log(burrito.getDescription());
for (let index in json.ingredientes) {
    console.log(json.ingredientes[index]);
    let ingrediente = IngredienteFactory.MakeIngrediente(json.ingredientes[index], burrito);
    burrito = ingrediente;
}
console.log(burrito.getDescription());
console.log(burrito.getPrice());
//# sourceMappingURL=patronDecorador.js.map