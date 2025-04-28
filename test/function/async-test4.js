async function callApi() {
  console.log("test1");
  await Promise.resolve().then(value => console.log('promise'));
  await console.log('await!');
  console.log("test2");
}

async function search() {
  console.log("start~");
  callApi();
  console.log("test3");
  console.log("============");

  for (let i = 0; i < 1000; i++) {
    console.log(`i : ${i}`);
  }
  console.log("end~");
}

search();
