function cl(...args) {
    console.log(...args)
}

const a = 2
let b = 4

let age = a * ++b; // 10
let age2 = a * b++; // 8

age += age2 + 38; // 56

const div = a / b; //1.8

const firstName = 'Steve',
    lastName = 'Jobs',
    isCoder = true

const str = 'His name is ' + firstName + ' ' + lastName + ', he was ' + age + // Мутирование
    ' years old when he died, and that he was a Coder is ' + isCoder + '!'

let undef // undefined

const isSrtring = typeof firstName === 'string',
    isNumber1 = typeof age === 'number',
    isNumber2 = typeof div === 'number',
    isBoolean = typeof isCoder === 'boolean',
    isUndef = typeof undef === 'undefined',
    isNull = null === 'object'

if (42 == '42') { } // true: implicit type conversion
else if (42 === '42') { } // false: checking by type
else { }

isReady = true
isReady ? true : false

function myMax1(...args) {
    let max = args[0]
    args.forEach(e => e >= max ? max = e : void 0)
    return max
}
function myMax2(...args) {
    return args.reduce((p, c) => p >= c ? p: c, args[0])
}

const r1 = myMax1('42', '24', 23, 56, '99', 100)
const r2 = myMax2('42', '24', 23, 56, '99', 100)
debugger

const cars = ['Мазда', 'Мерс', 'Форд'];// new Array('Мазда','Мерс','Форд')

cars[1] = 'Тойота';
cars[3] = 'Мерс'; // добавляется элемент!
cars[cars.length] = 'Ауди'; // добавляется элемент!

console.log(cars);
console.log(cars[1]);
console.log(cars.length);

// Циклы
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Циклы_и_итерации

// do...while
// while
// label
// break
// continue
// for...in //проходит по всем перечислимым свойствам объекта

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
}
for (let car of cars) {
    console.log(car);
}

// Объекты
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

const person = {
    firstName: 'Андрей',
    lastName: 'Пустошкин',
    age: 39,
    isCoder: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        // объявление метода
        console.log('greetings');
    },
};

console.log(person);
console.log(person.firstName);
const key = 'lastName';
console.log(person[key]);
person.isCoder = false;
person.greet();
