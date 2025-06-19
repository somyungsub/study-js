
const obj = {
  name: 'sss',
  printNameFn: function () {
    console.log(this.name);
  },
  printNameArrow: () => console.log(this.name),
}

obj.printNameFn();
obj.printNameArrow();


function thisTest() {
  console.log("this : ", this);
}
const tisTestArrow = () => {
  console.log("this : ", this);
}

thisTest();
tisTestArrow();


setTimeout(() => {
  console.log("arrow : ", this);
}, 100);

setTimeout(function () {
  console.log("익명 : ", this);
}, 100);


