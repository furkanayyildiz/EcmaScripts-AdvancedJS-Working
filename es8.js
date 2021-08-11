/*
// fromEntries
let userProfile = [
  ["Sova", "Russia"],
  ["Jett", "Korea"],
  ["Brimstone", "USA"],
];
console.log(Object.fromEntries(userProfile));

const obj = Object.entries(userProfile);
console.log(obj);

//padStart padEnd
let str = "5";
str = str.padStart(4, 2);
console.log(str);

// async and await
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

// works only inside async functions
//let value = await promise;
*/
async function func() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("it came!!"), 2000);
  });
  let result = await promise;
  alert(result);
}
func();
