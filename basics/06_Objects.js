/* eslint-disable no-unused-vars */
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

let person = {}

function init() {
    person = {
        name: 'Андрей',
        age: 39,
        isProgrammer: true,
        languages: ['ru', 'en', 'de'],
        'Complex key': 'Complex value',
        ['key_' + (1 + 3)]: 'Computed key',
        greet() { return 'Greets!!!' },
        info() { return this }
    }
    Object.defineProperty(person, 'Complex key', { enumerable: false })
    Object.defineProperty(person, ['key_' + (1 + 3)], { enumerable: false })

}
init()

const runFunc = {}

function listFunc() {
    return Object.keys(runFunc)
}
runFunc['listFunc'] = listFunc


const runMeths = (func = 'info') => {
    return person[func].call(person)
}
runFunc['runMeths'] = runMeths
//runMeths()

//console.log(`${person['Complex key']}, ${person['key_4']}, ${person.key_4}`);
function getKeysPerson(object = person) {
    return `${person['Complex key']}, ${person['key_4']}, ${person.key_4}`
}
runFunc['getKeysPerson'] = getKeysPerson

person.languages.push('by')

//delete person['key_4']

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function destrObject(object = person) {
    const { name: newName, age = 10, languages: newLang } = object
    return `${newName}, ${age}, [${newLang}]`
}
runFunc['destrObject'] = destrObject

function iterateKeys(object = person) {
    let str = ''
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in
    for (const key in object) {
        // https://eslint.org/docs/rules/no-prototype-builtins
        // person.hasOwnProperty(key) // not allowed eslint
        // if (Object.prototype.hasOwnProperty.call(object, 'key')) {
        if (object.hasOwnProperty(key)) {
            str += `Key: ${key}, \t\tValue: ${object[key]}` + '\n'
        }
    }
    return str
}
runFunc['iterateKeys'] = iterateKeys

function iterateKeys2(object) {
    let str = ''
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Object.keys(person).forEach((key, index, array) => {
        str += `Index:${index}, Index: ${key}\n`
    })
    return str
}
runFunc['iterateKeys2'] = iterateKeys2

// this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
const logger = {
    keys() { return Object.keys(this) },
    keysAndValues() {
        const arr = []
        Object.keys(this)
            .forEach(key => arr.push([key, this[key]]))
        return arr
    },
    keysAndValues2() {
        // console.log('this: ',this);
        const arr = []
        Object.keys(this)
            .forEach(function (key) {
                arr.push([key, this[key]])
            }, this) // у функции новый контекст!
        // или .bind(this)
        return arr
    },
    withParams(top = false, between = false, bottom = false) {
        let str = ''
        if (top) str = '----- Start -----\n'

        Object.keys(this).forEach((key, index, array) => {
            str += `Key:${key}, Value:${this[key]}, Index:${index}` + '\n'
            if (between && array.length - 1 != index) str += '----- --- -----\n'
        })

        if (bottom) str += '----- End -----\n'

        return str
    }
}
runFunc['logKeys'] = logger.keys.bind(person)
runFunc['logKeysNvals1'] = logger.keysAndValues.bind(person)
runFunc['logKeysNvals2'] = logger.keysAndValues2.bind({ a: 1, b: { c: 2 } })
runFunc['logKeysNvals3'] = () => logger.keysAndValues2.call(person)
runFunc['logWithParams1'] = () => logger.withParams.call(person, true, false, true)
runFunc['logWithParams2'] = () => logger.withParams.apply(person, [false, true, false])

// https://stackoverflow.com/questions/34449045/what-is-the-difference-between-reflect-ownkeysobj-and-object-keysobj
runFunc['allKeysPerson'] = () => Reflect.ownKeys(person)
runFunc['enumKeysPerson'] = () => Object.keys(person)

const foo = process.argv[2]

if (foo in runFunc) {
    console.log(runFunc[foo].call(this))
} else if (!foo) {
    console.log(runFunc['listFunc'].call(this))
} else {
    console.log('Function does not exist!');
}

console.log()
