let arr = [];
const data = {
  t1: '',
  t2: '',
}
arr.push({...data});

console.log(arr);
console.log(arr[0]);

var request = {};
console.log(request);
console.log(!!request);
let data2 = !!request ? {a:'a'} : {};

console.log(data2);

