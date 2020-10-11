function urlGenerator(domain) {
    return function (url) {
        return `http://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('yahoo'))
// console.log(ruUrl('mail'))
// console.log(ruUrl('yandex'))



const person1 = { name: 'Mihail', age: 22, job: 'Frontend' }
const person2 = { name: 'Elena', age: 19, job: 'SMM' }

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function myBind(src, dst) {
    Object.prototype.foo = dst
    return function () {
        src.foo()
        //delete Object.prototype['foo']
    }
}

mb1 = myBind(person1, logPerson) 
mb2 = myBind(person2, logPerson)
mb1()
mb2()

try {
    //person1.foo()
} catch (err) {
    console.log('Нет такой функции');
}

// Minin
function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

// bind(person1, logPerson)() 
// bind(person2, logPerson)()