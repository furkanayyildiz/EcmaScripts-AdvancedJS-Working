/*
let a = { surname: "ay" };
let b = {};
let x = a;

alert(a === b);
alert(x === a);
*/
/*
// cloning

//1. way
let obje1 = {
  age: 30,
  color: "red",
};

let obje2 = {};

for (let key in obje1) {
  obje2[key] = obje1[key];
}
obje2.age = 40;
alert("1 . obje age" + obje1.age);
alert("2. obje age" + obje2.age);

// 2. way
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);

const obj = { a: 1 };
const copy = Object.assign({}, obj);
copy.a = 2;
console.log(copy);
*/
/*
let name = "Furkan";
let person = {
  name: "ali",
};
person.sayName = function () {
  alert("My name is:" + this.name);
};
person.sayName();
*/

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} and I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(` I am making a ${this.type}`);
  }
}

const wizard = new Wizard("Sage", "Heal");
const wizard2 = new Wizard("Omen", "Dark Magic");

wizard.introduce();
wizard2.play();
