// Функции
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions
const greet = function (nname) {
  console.log("Привет,", nname);
};
greet("Андрей");
console.dir(greet);
console.log(greet.name); // функция это объект

const greet2 = function greetttt(nname, age) {
  console.log("Привет,", nname);
};
greet2("Сергей", 29);
console.dir(greet2);

// Анонимные функции
let counter = 0;
let interval = setInterval(function () {
  if (counter === 5) {
    // clearInterval(interval)
    interval = 0;
  } else {
    console.log(++counter);
  }
}, 100);

// Стрелочные функции и параметры по умолчанию
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const arr = (firstName, age = 5) => {
  console.log("Hello,", firstName, age);
}
arr("Андрей", 39);

const arr2 = (firstName, age = 5) => console.log("Hello,", firstName, age);
arr2("Сергей");

function sumAll(...all) {
  let res = 0;
  for (const n in all) {
    res += n;
  }
  return res;
}
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Замыкания
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function createNumber(firstName) { // private-переменная firstName
  return function (lastName) {
    console.log(firstName, lastName);
  }
}
clojure = createNumber('Андрей')
clojure('Пу')