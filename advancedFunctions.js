/*
function makeFunc() {
  var name = "Furkan";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function counter() {
  let counter = 0;
  setTimeout(function () {
    var innerCounter = 0;
    counter += 1;
    alert("counter =" + counter);

    setTimeout(function () {
      counter += 1;
      innerCounter += 1;
      alert("counter = " + counter + "inner counter = " + innerCounter);
    }, 500);
  }, 1000);
}
counter();

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

alert(counter.value());
counter.increment();
counter.increment();
alert(counter.value());
counter.decrement();
alert(counter.value());

// curriying function

let curry = (f) => {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
};

function sum(a, b) {
  return a + b;
}

let curriying = curry(sum);
console.log(curriying(2)(3));
*/
// Compose Function
// syntax also line 73
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => {
  return num + 1;
};
console.log(compose(sum, sum)(9));
