// 3.1;
// function getHello() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("hello");
//     }, 500);
//   });
// }

// getHello().then((res) => console.log(res));

// 3.2;
// function addAsync(a, b) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(a + b);
//     }, 1000);
//   });
// }

// addAsync(4, 5).then((res) => console.log(res));

// 3.3;

// function checkNumber(n) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (n % 2 === 0) {
//         res("even");
//       } else {
//         rej("Odd number not allowed");
//       }
//     });
//   });
// }

// checkNumber(4).then((res) => console.log(res));
// checkNumber(5).catch((rej) => console.log(rej));

// 3.4;

// function login(username, password) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         res("Login successful");
//       } else {
//         rej("Invalid credentials");
//       }
//     }, 1200);
//   });
// }

// login("admin", `1234`).then((res) => console.log(res));
// login("123", "qer").catch((rej) => console.log(rej));

// 3.5;

// function getNumbers() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res([1, 2, 3, 4, 5]);
//     }, 700);
//   });
// }
// getNumbers().then((res) => {
//   for (let i = 0; i < res.length; i++) {
//     console.log(res[i]);
//   }
// });

// 3.6;
// function unstableOperation() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         res("Success");
//       } else {
//         rej("Random failure");
//       }
//     }, 1000);
//   });
// }

// unstableOperation().then((res) => console.log(res));
// unstableOperation().catch((rej) => console.log(rej));

// 3.7;

// function getUser() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ name: "Dana", age: 16 });
//     }, 500);
//   });
// }

// getUser().then((res) =>
//   console.log(`user: Name ${res["name"]} age ${res["age"]}`)
// );

// 3.8;

// function squarePositive(n) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (n >= 0) {
//         res(n * n);
//       } else {
//         rej("Negative number not allowed");
//       }
//     }, 500);
//   });
// }
// squarePositive(4).then((res) => console.log(res));
// squarePositive(-1).catch((rej) => console.log(rej));

3.9;

function waitTwoSeconds() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Done waiting");
    }, 2000);
  });
}

waitTwoSeconds().then((res) => {
  console.log(res);
});

3.1;

function downloadFile(url) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (url.startsW("http")) {
        res("Downloaded from URL");
      } else {
        rej("Invalid URL");
      }
    }, 1500);
  });
}
downloadFile("http")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
