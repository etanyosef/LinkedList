import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

console.log(list.head);

list.size();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.toString();

// list.size();
// list.toString();
// list.getHead();
// list.prepend(6);
// list.size();
// list.toString();

// list.getHead();
// list.tail();
// list.append(7);
// list.toString();
// list.tail();
// list.at(7);

// console.log(list.contains(6));
// list.findIndex(3);
// list.pop();
// list.toString();
// console.log(list.contains(6));
// list.findIndex(3);
// list.pop();
// list.toString();

// list.findIndex(8);

list.insertAt(3, 6, 7);
list.toString();