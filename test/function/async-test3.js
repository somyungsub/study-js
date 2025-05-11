async function callApi() {
  console.log("callApi 1");
  await setData('data'); // 실은 동기 함수라 await 의미 없음
  console.log("callApi 2");
  await Promise.resolve().then(value => console.log('promise'));
  console.log("callApi 3");
}

// async만 붙어 있고 실제 비동기 작업 없음
async function setData(data) {
  console.log("setData : ", data);
}

async function search() {
  console.log("start~");
  await callApi();
  console.log("call 종료");
  console.log("============");

  for (let i = 0; i < 1000; i++) {
    console.log(`i : ${i}`);
  }
  console.log("end~");
}

search();
