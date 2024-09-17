
//Write a code to reverse a Linked List from position X to position Y?
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    reverseFromXtoY(x, y) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = null;
        let next = null;
        let count = 1;

        while (count < x && current) {
            previous = current;
            current = current.next;
            count++;
        }

        let tail = current;

        while (count <= y && current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            count++;
        }

        if (tail) {
            tail.next = current;
        } else {
            this.head = previous;
        }

        return this.head;
    }
}

// Example usage:
const list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);

console.log(list.reverseFromXtoY(2, 4));

   