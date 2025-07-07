function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data received");
    }, 3000);
  });
}

// fetchData().then((data) => console.log(data));
// console.log(fetchData());

async function loadData() {
  const result = await fetchData();
  console.log(result);
}

// loadData();

// 실전 예제 : 유저 정보 가져오기
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

async function showUser() {
  console.log("유저 정보 로딩 중...");
  const user = await getUser();
  console.log(`이름: ${user.name}, 나이: ${user.age}`);
}

// showUser();

// try catch
async function load() {
  try {
    const data = await fetch("http://example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.error("데이터 로딩 실패", err);
    // retry 3 times
    // return "john";
  }
}

load();
