// Wrapper
{
    const withDefVal = (target, defVal = 0) => new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defVal)
    })
    const p = withDefVal({ x: 24, y: 42 }, 0)
}
// Hidden properies Example#1
// https://stackoverflow.com/questions/37563495/what-is-a-receiver-in-javascript
{
    const withHiddenProps = (target, prefix = '_') => {
        return new Proxy(target, {
            has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
            ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
            get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
        })
    }
    const data = withHiddenProps({ name: 'Vladilen', age: 25, _uid: '1231231' })
    for (const key in data) data.hasOwnProperty(key) ? console.log(data[key]) : void 0
}
// Hidden properies Example#2
{
    const monster1 = { _age: 111, [Symbol('secret')]: 'I am scared!', eyeCount: 4 }
    const handler1 = { ownKeys: target => Reflect.ownKeys(target) }
    const proxy1 = new Proxy(monster1, handler1);
    for (const key of Object.keys(proxy1)) console.log(key); // "_age" "eyeCount"
}

// Optimization
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call
{
    const IndexedArray = new Proxy(Array, {
        construct(target, [args]) {
            const index = {}
            args.forEach(item => (index[item.id] = item))

            return new Proxy(new target(...args), {
                get(arr, prop) {
                    switch (prop) {
                        case 'push':
                            return item => {
                                index[item.id] = item
                                arr[prop].call(arr, item)
                            }
                        case 'pop':
                            return () => {
                                arr[prop].call(index)
                                arr[prop].call(arr)
                            }
                        case 'findById':
                            return id => index[id]
                        default:
                            return arr[prop]
                    }
                }
            })
        }
    })

    const users = new IndexedArray([
        { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
        { id: 22, name: 'Elena', job: 'Student', age: 22 },
        { id: 33, name: 'Victor', job: 'Backend', age: 23 },
        { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
    ])

    console.log(users.findById(11))
    users.push({ id: 55, name: 'Andrey', job: 'Engineer', age: 24 })
    console.log(users)
    users.pop()
    console.log(users)
    users.shift()
    console.log(users)
}

// Example handler.construct()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
{
    function monster2(disposition) {
        this.disposition = disposition
    }
    const handler2 = {
        construct: (target, args) => {
            args.forEach((e, i, arr) => e === 'fierce' ? arr[i] = 'firece' : void 0)
            return new Proxy(new target(...args), {
                get: (target, name, receiver) => {
                    // console.log('target[name]')
                    return target[name]
                }
            })
        }
    }
    // console.log(new monster2('mmmmonster').disposition)
    const proxy2 = new Proxy(monster2, handler2)
    mp = new proxy2('fierce')
    // console.log(mp.disposition)
}

// Example
{
    function monster1(disposition) { this.disposition = disposition }

    const handler1 = {
        construct(target, args) {
            /// Here we are correcting and returning the monster1 constructor
            return new target(...args)
        },
        get() {
            console.log('get handler1');
        }
    }
    const handler2 = {
        construct(target, args) {
            // Here we are correcting monster1 constructor
            // and returning the proxy of corrected monster1 
             return new Proxy(new target(...args), {
                get() {
                    console.log('get handler2');
                }
             })
        }
    }

    const proxy1 = new Proxy(monster1, handler1)
    const proxy2 = new Proxy(monster1, handler2)

    const p1 = new proxy1('proxy1')
    const p2 = new proxy2('proxy2')

    console.log(p1) // monster1
    console.log(p2) // Proxy

    p1.test
    p2.test

    // window.location = 'file:///C:/Users/123/Desktop/js/blank.html'
}