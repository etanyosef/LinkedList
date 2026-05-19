export class LinkedList {
    constructor() {
        this.head = null;
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

    }

    size() {

    }

    head() {

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
            result += current.value + ' -> ';
            current = current.nextNode;
        }

        console.log(result + 'null');
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}