class ListNode<T> {
    public value: T;
    private next: ListNode<T>;
    
    constructor(value: T, next: ListNode<T> = undefined) {
        this.value = value;
        this.next = next;
    }
    
    getNext(): ListNode<T> {
        return this.next;
    }

    setNext(node: ListNode<T>): void {
        this.next = node;
    }    
}
class LinkedList<T> {

    private head: ListNode<T>;
    private tail: ListNode<T>;

    constructor(head: ListNode<T> = undefined) {
        this.head = head;    
        this.tail = head;
    }

    getHead(): ListNode<T> {
        return this.head;
    }

    getTail(): ListNode<T>{
        return this.tail;
    }

    public addNode(node: ListNode<T>) {
        if (this.head === undefined) {
            this.head = node;
        } else {
            this.tail.setNext(node);
        }

        this.tail = node;
    }

    public removeNode(position: number): void {
        if (position <= 0) {
            this.head = this.atPosition(1);            
        }
        if (this.atPosition(position) === this.tail) {
            this.tail = this.atPosition(position - 1);           
        }
        this.atPosition(position - 1).setNext(this.atPosition(position + 1));
    }

    public atPosition(position: number): ListNode<T> {
        var currentNode = this.getHead();
        for (let index = 0; index < position; index++) {
            if (currentNode == undefined) {
                break;                
            }          
            currentNode = currentNode.getNext();
        }
        return currentNode;
    }
}


var list = new LinkedList<string>();

list.addNode(new ListNode<string>("A"));
list.addNode(new ListNode<string>("b"));
list.addNode(new ListNode<string>("d"));
list.addNode(new ListNode<string>("Y"));
list.addNode(new ListNode<string>("K"));
list.addNode(new ListNode<string>("I"));

//list.atPosition(100)//.setNext(undefined);
list.removeNode(5);
console.log(list.getTail());
console.log("-----------------------");

list.addNode(new ListNode<string>("g"));
list.addNode(new ListNode<string>("t"));
list.addNode(new ListNode<string>("p"));
list.addNode(new ListNode<string>("q"));

var currentNode = list.getHead();

while (currentNode != undefined) {
    console.log(currentNode.value);
    currentNode = currentNode.getNext();
}

