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
    addNode(node) {
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            this.tail.setNext(node);
        }
        this.tail = node;
    }
}
var list = new LinkedList();
list.addNode(new ListNode(1));
list.addNode(new ListNode(2));
list.addNode(new ListNode(8));
list.addNode(new ListNode(4));
list.addNode(new ListNode(15));
list.addNode(new ListNode(13));
var currentNode = list.getHead();
while (currentNode != undefined) {
    console.log(currentNode.value);
    currentNode = currentNode.getNext();
}
//# sourceMappingURL=linkedList.js.map