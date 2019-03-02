class ListNode {
    constructor(value, next = undefined) {
        this.value = value;
        this.next = next;
    }
    getNext() {
        return this.next;
    }
    setNext(node) {
        this.next = node;
    }
}
class LinkedList {
    constructor(head = undefined) {
        this.head = head;
        this.tail = head;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    addNode(node) {
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            this.tail.setNext(node);
        }
        this.tail = node;
    }
    removeNode(position) {
        if (position <= 0) {
            this.head = this.atPosition(1);
        }
        if (this.atPosition(position) === this.tail) {
            this.tail = this.atPosition(position - 1);
        }
        this.atPosition(position - 1).setNext(this.atPosition(position + 1));
    }
    atPosition(position) {
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
var list = new LinkedList();
list.addNode(new ListNode("A"));
list.addNode(new ListNode("b"));
list.addNode(new ListNode("d"));
list.addNode(new ListNode("Y"));
list.addNode(new ListNode("K"));
list.addNode(new ListNode("I"));
//list.atPosition(100)//.setNext(undefined);
list.removeNode(5);
console.log(list.getTail());
console.log("-----------------------");
list.addNode(new ListNode("g"));
list.addNode(new ListNode("t"));
list.addNode(new ListNode("p"));
list.addNode(new ListNode("q"));
var currentNode = list.getHead();
while (currentNode != undefined) {
    console.log(currentNode.value);
    currentNode = currentNode.getNext();
}
//# sourceMappingURL=linkedList.js.map