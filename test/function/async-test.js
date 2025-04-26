console.log("start");

setTimeout(() =>{
  console.log("setTimeout");
},0);

setTimeout(() =>{
  console.log("setTimeout2");
});

Promise.resolve().then(value => console.log("promise"));
Promise.resolve().then(value => {
  console.log("promise2");
  setTimeout(() => {
    console.log("promise2 setTimeout");
  }, 0);
});

setTimeout(() =>{
  console.log("setTimeout3");
});
console.log("end");