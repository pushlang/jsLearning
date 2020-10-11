// Prototypes

const person1 = new Object({
    name: 'Andrey',
    age: 39,
    greet: function name(params) {
        console.log('Greets!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello,', this.name)
}

person1.sayHello()

const lena = Object.create(person1)
lena.name = 'Elena'
console.log(lena.name)
console.log(person1.name)
console.log(lena.sayHello())

const str = new String('string')
str.sayHello()