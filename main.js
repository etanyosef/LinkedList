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
list.size();
list.toString();
list.listHead();
list.prepend(6);
list.size();
list.toString();

list.listHead();