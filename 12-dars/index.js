
var list = [];

//   list[0]='shaxzod'
list.push('shaxzod');
list.push('akram');
list.push('ibrohim');

list.splice(1,1,'ibrohim')
console.log(list);

console.log(list.indexOf('shohjahon'));
console.log(list.length);

var oxirgiIsm = list.pop();
console.log(oxirgiIsm);
console.log(list);

list.splice(1,1);

console.log(list);

list.push('12', 12, 'salom', {});

console.log(list);

console.log(list.slice(0,3));

console.log(list.join(', '))
list.sort();

console.log(list);

var list2 = ['bekzod', 'ziyod', 'mahmud', 'Akbar'];

list2.sort()

console.log(list2);

list2.sort();
list2.reverse();
console.log(list2);
