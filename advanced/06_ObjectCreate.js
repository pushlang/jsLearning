
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new


let person = Object.create(
    {
        calcAge() {
            console.log('Age (proto):', new Date().getFullYear() - this.birthYear)
        } // prototype
    },
    {
        name: {
            enumerable: true, // displayed true/false
            writeable: false, // can be changed true/false
            configurable: true, // can be deleted true/false
            value: 'Andrey'
        },
        birthYear: { 
            enumerable: true, 
            writable: true, 
            configurable: false, 
            value: 1981 
        },
        age: {
            enumerable: false, 
            configurable: false,
            get() { return new Date().getFullYear() - this.birthYear},
            set(value) { 
                document.body.style.background = 'pink'
                this.birthYear = new Date().getFullYear() - value 
            }
        }

    })

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${person[key]}`)
    }
}

person.name = 'Pomidoro'
person.calcAge()
console.log('Age (get) #1:', person.age)
person.age = 17
console.log('Age (get) #2:', person.age)

// let object = {
//     fc: undefined,
//     get fullscreen() { 
//         return this.fc === undefined ? false : this.fc },
//     set fullscreen(v) { this.fc = v }
// }

// console.log(object.fullscreen)
// object.fullscreen = 1080
// console.log(object.fullscreen)

// https://stackoverflow.com/questions/34449045/what-is-the-difference-between-reflect-ownkeysobj-and-object-keysobj
console.log('Reflect: ', Reflect.ownKeys(person)) // with enumerable=false
console.log('Object: ', Object.keys(person)) // only enumerable