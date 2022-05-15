//There are 2 feature in es7. There are line 4 (exponentiation of numbers) and .includes
let find = prompt("Please Enter a character from  Valorant");

const cube = (x) => x ** 3;

let findingPlayer = () => {
  const characters = ["Sova", "Raze", "Reyna", "Cyper", "Killjoy"];
  if (characters.includes(find) === true) {
    alert("You select my favorite heros. Thanksss");
  } else if (characters.includes(find) === false) {
    alert(cube(3));
  }
};

findingPlayer();
