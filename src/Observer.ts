class Subject {
    private observers: Array<Observer> = new Array();

    public register(observer: Observer) {
        this.observers.push(observer);
    }

    public unRegister() {
        
    }

    public notifyObserver(price: number) {
        this.observers.forEach(observer => {
            observer.update(price);
        });
    }
}

class IBMPrice extends Subject { }
class ApplePrice extends Subject { }

interface Observer {
    state: number;
    update(price: number): void;
}

class TraderBotIBM implements Observer {
    public state: number;

    public update(price: number): void {
        this.state = price;
        console.log(`IBM new price: ${this.state}`);
    }
}

class TradeBotApple implements Observer {
    public state: number;

    public update(price: number): void {
        this.state = price;
        console.log(`Apple new price: ${this.state}`);
    }
}

const ibmPrice = new IBMPrice();
const applePrice = new ApplePrice();
ibmPrice.register(new TraderBotIBM());
applePrice.register(new TradeBotApple());

ibmPrice.notifyObserver(5000);
applePrice.notifyObserver(10000);
ibmPrice.notifyObserver(3000);
ibmPrice.notifyObserver(12000);
applePrice.notifyObserver(10000);
ibmPrice.notifyObserver(3000);