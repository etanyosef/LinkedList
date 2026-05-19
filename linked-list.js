class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode();
            return
        }

        // put the whole linked list inside the nextNode of the newNode
        // and make the newNode the head
        const linkedList = this.head;
        newNode.nextNode = linkedList;
        this.head = newNode;
    }

    size() {
        if(!this.head) {
            console.log('The list is empty.');
            return;
        }

        let current = this.head;
        let count = 0;
        while(current) {
            current = current.nextNode;
            count++;
        }

        console.log(count);
    }

    listHead() {
        if(!this.head) {
            return;
        }

        return console.log('Head: ' + this.head.value);
    }

    tail() {

    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }

    findIndex(value) {

    }

    toString() {
        let current = this.head;
        let result = '';

        while(current) {
            result += `( ${current.value} )->`;
            current = current.nextNode;
        }

        console.log(result + 'null');
    }
}