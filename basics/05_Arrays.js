// Массивы
const cars = ['Mazda', 'Merc', 'Ford', 'VW']
console.log(cars)

len1 = cars.push('Toyota') // в конец
console.log(cars, len1)
len2 = cars.unshift('Volga') // в начало
console.log(cars, len2)
const first = cars.shift() // мутирует
const last = cars.pop() // мутирует

console.log(cars, cars.length, first, last)


console.log('abcdefghi'.split('').reverse())
console.log('abc def ghi'.split(' ').reverse())
console.log(["e", "d", "c", "b", "a"].join())
console.log(["e", "d", "c", "b", "a"].join(" "))

console.log(cars.indexOf('VW')); // 3
console.log(cars.indexOf('Suzuki')); // -1

const people = [
    { fName: 'Pomidoro', paym: 12000 },
    { fName: 'Andrey', paym: 10000 },
    { fName: 'Sergey', paym: 9000 },
    { fName: 'Elena', paym: 8000 }
]

console.log(people.findIndex(pers => pers.paym === 8000)) // pers index

console.log(people.find(pers => pers.paym === 9000)) // pers element

console.log(people.find(pers => pers.paym === 11000)) // undefined

console.log(cars.includes('VW'))

console.log(cars.map(car => car.toUpperCase()));

console.log([1, 1, 2, 3, 5, 8].map(n => n ** 2))

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const myPow = (n, index, array) => n ** 2
console.log([1, 1, 2, 3, 5, 8].map(myPow))
console.log([1, 1, 2, 3, 5, 8].map(Math.sqrt))

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const min = 1, max = 5
console.log(
    [1, 1, 2, 3, 5, 8]
        .filter((n, index, array) => n > min && n < max)
)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
console.log(
    people
        .filter(pers => pers.paym > 0000)
        .reduce((acc, pers, index, array) => acc + pers.paym, 0)
)