/*
// flat and flatMap
const array = [1, 2, [3, 4, [5]]];
console.log(array.flat(2)); // 2 is depth of array

let cart = [
  {
    name: "Smartphone",
    qty: 2,
    price: 500,
    freeOfCharge: false,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 800,
    freeOfCharge: false,
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "Smartphone") {
    return [
      item,
      {
        name: "Screen Protector",
        qty: item.qty,
        price: 5,
        freeOfCharge: true,
      },
    ];
  } else {
    return [item];
  }
});

console.log(newCart);
*/
// fromEntries
let userProfile = [
  ["Sova", "Russia"],
  ["Jett", "Korea"],
  ["Brimstone", "USA"],
];
console.log(Object.fromEntries(userProfile));

const obj = Object.entries(userProfile);
console.log(obj);
