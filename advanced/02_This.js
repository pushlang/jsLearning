function hello() {
    console.log('Hello,', this);
}

hello()

const person1 = {
    name: 'Andrey',
    age: 39,
    sayHello: hello, // context person
    sayHelloWindow: hello.bind(window), // context window
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

person1.sayHello()
person1.sayHelloWindow()
person1.logInfo()

const person2 = {
    name: 'Elena',
    age: 29
}

const pp1 = person1.logInfo.bind(person2)
pp1('Frontend1', '8-911-1234567')

const pp2 = person1.logInfo.bind(person2, 'Frontend2', '8-911-1234567')()

person1.logInfo.call(person2, 'Frontend3', '8-911-1234567')

person1.logInfo.apply(person2, ['Frontend4', '8-911-1234567'])



const arr = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }
// console.log(multBy(arr, 2))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(arr.multBy(2))