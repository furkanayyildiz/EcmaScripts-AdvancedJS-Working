// let is block scope. We can use "let" inside of {} where it create
let bodyWeight = 70;

function waterCalc() {
  let age = 22;
  if (bodyWeight > 69) {
    let water = bodyWeight / 20;
    console.log(
      `your body weight is ${bodyWeight}kg , your age is ${age} and you have to drink ${water} L `
    );
  }
}
waterCalc();

// In object ve can change values and ve can add attribute in object
const car = { type: "Fiat", model: "Egea", color: "white" };
car.color = "red"; // we can change
car.fuel = "diesel";

const COLORS = ["red", "green", "blue"];
console.log(COLORS[0]); // red
COLORS[0] = "yellow";
console.log(COLORS[0]); // yellow

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person;

console.log(lastName); //Doe

// Object properties
const a = "test";
const b = true;
const c = 789;

const okObj = { a, b, c };

// Template strings
let city = "Ankara";
const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;
console.log(message);

// Arrow Function
const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};
