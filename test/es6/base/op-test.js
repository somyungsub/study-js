function transData(data) {
  return {
    id: data.id ?? 0,
    name: data.name ?? '',
    age: data.age ?? 1,
    email: data.email ?? ''
  }
}

const data1 = {
  id: 1,
  name: 'sss',
  age: 20,
  email: 'sss@naver.com'
}

const data2 = {
  name: 'sss',
  age: 20,
}

console.log(transData(data1));
console.log(transData(data2));

class TestClass {
  constructor(name) {
    this._name = name;
    this._data = {name: ''}
  }

  get name() {
    return this._name;
  }

  get data() {
    return this._data;
  }
}

const test = new TestClass('sss');
console.log(test.name);
console.log(test)
console.log(Object.keys(test));
test.name = 'sss2';

console.log(test.name);
console.log(Object.keys(test));

console.log(test.data);


const obj22 = {
  _name: 'ss',
  get name() {
    return this._name;
  },
}

console.log(obj22._name);
console.log(obj22.name);
obj22.name = 'aaa';
console.log(obj22._name);
console.log(obj22.name);

obj22._name = 'aaa2';
console.log(obj22._name);
console.log(obj22.name);