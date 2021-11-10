// A promise is an object that may produce a single value some time in the future
// Either a resolved value or a reson that is not resolved(rejected)
//Example 1
const promise = new Promise((resolve, reject) => {
  if (false) {
    resolve("stuff worked");
  } else {
    reject("hello");
  }
});

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
  })
  .catch(() => console.log("Error!"));
//Example 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Merhaba");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Furkan");
});

Promise.all([promise2, promise3]).then((values) => {
  console.log(values);
});
//Example 3

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
