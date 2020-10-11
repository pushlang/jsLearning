// Числа
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
    console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

const a = '2'
const b = 2
const c = '2.22'

console.log(a + b) //22 string
console.log(parseInt(a) + b) //4 integer
console.log(+a + b) //4 integer
console.log(parseFloat(c)) //2.2 float
console.log(+c + b) //4.220000000000001 float

console.log(0.2 + 0.4)
console.log(parseFloat((0.2 + 0.4).toFixed(1)))

// BigInt
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt
console.log(9999999999999999n)
console.log(parseInt(123456789n))
console.log(BigInt(123456789))

// Math
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(Math.min(...[1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(Math.random())

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRand(123, 34))