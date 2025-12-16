function doubleAsync(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res(n * 2);
    }, 500);
  });
}

async function run() {
  let value = await doubleAsync(5);
  let a = console.log(value);
  return a;
}

run();

function fetchUser() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ id: 1, name: "Dana" });
    }, 1000);
  });
}

async function name1() {
  let value = await fetchUser();
  console.log(`User name: ${value["name"]}`);
}

name1();
