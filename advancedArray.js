// forEach
/*
const arr = [5, 6, 8];
const newArr = arr;

arr.forEach((num) => {
  newArr.push(num * 2);
});
console.log(newArr);
*/
const profiles = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
//forEach
let newUsernames = [];
profiles.forEach(({ username }) => {
  username = username + "!";
  newUsernames.push(username);
});
console.log(newUsernames);

/*  we can do in html like that
profiles.forEach((par, index) => {
  ++index;
  $("#result").innerHtml += index;
  ".Eleman" + par;
  ("<br>");
});
*/
// Map
let newProfiles = profiles.map(({ username }) => {
  return username + "?";
});
console.log(newProfiles);

// filter
let newTeam = profiles.filter(({ team }) => team === "red");
console.log(newTeam);

//reduce
const total = profiles.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(total);
