// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Objects
const person = {
    name: 'Andrey',
    age: 39,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log('Target:', target);
        // console.log('Prop:', prop);
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }

        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            // console.log(`Property '${prop}' setted to '${value}'`);
            target[prop] = value
        } else {
            throw new Error(`Property '${prop}' not exist.`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        if (prop in target) {
            // console.log(`Property '${prop}' deleting from '${target}'`);
            delete target[prop]
            return true
        } else {
            // return false
            throw new Error(`Property '${prop}' not exist.`)
        }
    }
})

op.age = 17
op.age
console.log(op.age_name_job);

try {
    op.hobby = 'Arduino'
} catch (err) {
    // console.log('Error:', err);
}

//console.log(`hobby in: ${'hobby' in op}, name in: ${'name' in op}`);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/delete
try {
    delete op['hobby']
} catch (err) {
    // console.log('Error:', err)
}

// Functions
const log = text => `Log: ${text}`

//console.log(log('test'))

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fp...')
        return target.apply(thisArg, args).toUpperCase()
    }
})

// console.log(fp('test'))

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log('Getting prop...', prop)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 17)

p.name