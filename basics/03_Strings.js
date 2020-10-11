// Строки
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
//https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Useful_string_methods

const firstName = 'Андрей'
const lastName = 'Андрей'
const age= 39
const output = `.......${firstName}.......${age ? 'A' : 'B'}...`

console.log(output)
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))
console.log(firstName.indexOf('др'))
console.log(firstName.toLowerCase().startsWith('анд'))
console.log(firstName.endsWith('ей'))
console.log(firstName.repeat(3))

const firstName2 = '       Андрей         '
console.log(firstName2.trim())
console.log(firstName2.trimLeft())
console.log(firstName2.trimRight())

function logPerson(s, name, age) {
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const output2 = logPerson`123:${firstName}:456:${age}:789`
console.log(output2);