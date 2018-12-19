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

    public addNode(node: ListNode<T>) {
        if (this.head === undefined) {
            this.head = node;
        } else {
            this.tail.setNext(node);
        }

        this.tail = node;
    }
}

var list = new LinkedList<number>();

list.addNode(new ListNode<number>(1));
list.addNode(new ListNode<number>(2));
list.addNode(new ListNode<number>(8));
list.addNode(new ListNode<number>(4));
list.addNode(new ListNode<number>(15));
list.addNode(new ListNode<number>(13));

var currentNode = list.getHead();

while (currentNode != undefined) {
    console.log(currentNode.value);
    currentNode = currentNode.getNext();
}

