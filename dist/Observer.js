class Subject {
    constructor() {
        this.observers = new Array();
    }
    register(observer) {
        this.observers.push(observer);
    }
    unRegister() {
    }
    notifyObserver(price) {
        this.observers.forEach(observer => {
            observer.update(price);
        });
    }
}
class IBMPrice extends Subject {
}
class ApplePrice extends Subject {
}
class TraderBotIBM {
    update(price) {
        this.state = price;
        console.log(`IBM new price: ${this.state}`);
    }
}
class TradeBotApple {
    update(price) {
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
//# sourceMappingURL=Observer.js.map