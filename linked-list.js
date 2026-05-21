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

    getHead() {
        if(!this.head) {
            return;
        }

        console.log('Head: ' + this.head.value);
    }

    tail() {
        if(!this.head) {
            return;
        }

        let current = this.head;

        while(current && current.nextNode) {
            current = current.nextNode;
        }

        console.log('Tail: ' + current.value);
    }

    at(index) {
        if(!this.head) {
            return;
        }

        let current = this.head;
        let count = 0;

        while(current && current.nextNode) {
            count++;
            current = current.nextNode;
            if(current.value === index) {
                console.log(`Value of index: ${index} is ${count}`);
                return;
            }
        }

    }

    pop() {
        if(!this.head) {
            return;
        }

        let current = this.head;
        console.log(`Removed the head with value: ${current.value}`)
        this.head = current.nextNode;
    }

    contains(value) {
        if(!this.head) {
            return;
        }

        let current = this.head;
        while(current) {
            if(current.value == value) {
                return true;
            } else {
                return false;
            }
        }
    }

    findIndex(value) {
        if(!this.head) {
            return;
        }

        let current = this.head;
        let count = 0;

        while(current && current.nextNode) {
            count++;
            current = current.nextNode;

            if(current.value === value) {
                console.log(`Index of ${value} is ${count}`);
                return;
            }
        }

        count = -1;
        console.log('Index: ' + count);

    }

    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `( ${current.value} )->`;
            current = current.nextNode;
        }

        console.log(result + 'null');
    }

    insertAt(index, ...values) {
        if (index < 0) {
            console.error('RangeError');
            return;
        }

        let current = this.head;
        let prev = null;

        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;

            if (!current) {
                return null;
            }
        }

        values.forEach(val => {
            const newNode = new Node(val);
            prev.nextNode = newNode;
            prev = newNode;
            newNode.nextNode = current;
        });
    }
}