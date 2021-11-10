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
*/

// async and await
// Example 1
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

// works only inside async functions
//let value = await promise;

//Example 2
async function func() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("it came!!"), 2000);
  });
  let result = await promise;
  alert(result);
}
func();

//Example 3
async function fetchUser() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchUser();

//Example 4
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
];
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users),
      console.log("post", posts),
      console.log("albums", albums);
  } catch (err) {
    console.log("opps!!", err);
  }
};
getData();
