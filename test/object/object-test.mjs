export const testObject = Object.freeze({
  name: 'sss',
  age: 12,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  }
});