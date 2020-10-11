class Animal {
    static type = 'ANIMAL'
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice() {
        console.log('I am an animal')
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// })

// console.log(animal)
// animal.voice()
// console.log(Animal.type)

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options) // в род. класс
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am a cat')
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})

// console.log(cat)
// cat.voice()
// console.log(Cat.type)
// console.log(cat.color)

// console.log(cat.ageInfo)
// cat.ageInfo = 8
// console.log(cat.ageInfo)

// Example #2
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector) // в род. класс
        // this.selector = options.selector
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'yellow'
})

const box3 = new Box({
    selector: '#box3',
    size: 100,
    color: 'green'
})

const showHide = (e, interval=1000) => {
    setInterval(() => {
        if (document.querySelector('#'+e.$el.id).style.display === 'none') {
            e.show()
        } else {
            e.hide()
        }
    }, interval)
}

// showHide(box1, 1000)
// showHide(box2, 2000)
// showHide(box3, 3000)

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = options.radius
    }
}

const c = new Circle({
    selector: '#circle',
    size: 100,
    color: 'yellow',
    radius: '50%'
})

showHide(c)
