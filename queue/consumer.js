var linkedList = require('./list');
let list = new linkedList.list();
list.add(10)
list.add(20)
list.addFirst(5);
// list.rwmovefirst();
list.removeAt(1);
console.log(list.head);
