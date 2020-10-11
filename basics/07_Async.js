// 07_Async
// Event Loop
// https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop

const timeout = setTimeout(() => {
    //console.log("After Timeout1")
}, 2500)
// console.log("After Timeout2")
// clearTimeout(timeout)

let counter = 0
let interval = setInterval(function () {
    if (counter === 5) {
        // clearInterval(interval)
        interval = 0 // разница???
    } else {
        // console.log(++counter)
    }
}, 100)

// clearInterval(interval)

// Promise
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

const delay = (wait = 1000) => new Promise(
    (resolve, reject) => setTimeout(
        () => resolve(wait), wait)) // ||rejected

delay(2500)
    .then((value) => console.log('2.5s', value))
    .catch((err) => console.error(err))//rejected
    .finally(() => console.log('finally'))

// Promise Example#2
const promise1 = new Promise
    ((resolve, reject) => setTimeout(
        () => resolve('foo'), 3000))

promise1.then((value) => {
    console.log(value) // "foo"
    console.dir(promise1)
})

// async
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function
const delay2 = (wait = 1000) => new Promise(
    (resolve, reject) => setTimeout(
        () => reject('rejected2'), wait))

const getData = () => new Promise(
    resolve => resolve([1, 2, 3, 4, 5]))

async function asyncEx() {
    try {
        await delay2(3000)
        const data = await getData()
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('finally2')
    }

}
asyncEx()
