//Shallow Clonning and Deep Clonning

let obj = {
  name: "Furkan",
  surname: "Ayyıldız",
  birth: {
    day: 27,
    month: 7,
    year: 1999,
  },
};
// Shallow Clonnig = A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
let clone1 = Object.assign({}, obj);
let clone2 = { ...obj };
//Deep Clonnig =  A shallow copy means that certain (sub-)values are still connected to the original variable.
let deepClone = JSON.parse(JSON.stringify(obj));

obj.name = "Ahmet";
obj.birth.day = 14;

console.log(obj);
console.log(clone1);
console.log(clone2);
console.log(deepClone);
