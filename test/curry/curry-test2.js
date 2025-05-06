// 화살표함수로
const curryMinMax = (fn) => (a) => (b) => (
  fn(a, b)
);

const minTest = curryMinMax(Math.min)(10);
console.log(minTest(20));   // 10
console.log(minTest(5));    // 5

const maxTest = curryMinMax(Math.max)(10);
console.log(maxTest(20)); // 20
console.log(maxTest(5));  // 10



const createUser = ({email, password}) => ({name,age,address}) => (saveFn) => {
  saveFn({email, password, name, age, address});
}
const baseUser = createUser({email: 'sso@gmail.com', password:'1234password'});
const completedUser = baseUser({name:'sso', age: 30, address:'seoul'});
completedUser(saveUser);

async function saveUser(user) {
  const request = {...user};
  await Promise.resolve(request).then((value) => {
    console.log(value)
  });
}

