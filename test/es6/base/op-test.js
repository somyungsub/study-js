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