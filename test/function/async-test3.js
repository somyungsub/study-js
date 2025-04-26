async function callApi() {
  console.log("test1");
  await console.log('await!');
  await Promise.resolve().then(value => console.log('promise'));
  console.log("test2");
}

async function search() {
  console.log("start~");
  await callApi();
  console.log("test3");
  console.log("============");

  for (let i = 0; i < 1000; i++) {
    console.log(`i : ${i}`);
  }
  console.log("end~");
}

search();
