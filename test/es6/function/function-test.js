
const obj = {
  name: 'sss',
  printNameFn: function () {
    console.log(this.name);
  },
  printNameArrow: () => console.log(this.name),
}

obj.printNameFn();
obj.printNameArrow();


function fun() {
  console.log("this : ", this);
}
const funArrow = () => {
  console.log("this : ", this);
}

fun();
funArrow();


setTimeout(() => {
  console.log("arrow : ", this);
}, 100);

setTimeout(function () {
  console.log("익명 : ", this);
}, 100);


