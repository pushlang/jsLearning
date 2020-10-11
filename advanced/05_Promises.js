// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://proglib.io/p/9-js-promise-advice/


// Эмуляция асинхронности
// console.log('Request...')
// setTimeout(() => { 
//     console.log('Prepearing...');
//     const backendData = {
//         server:'avs',
//         port:2000,
//         status:'working'
//     }
//     setTimeout(() => {
//         backendData.status= 'modified'
//         console.log('Received...')
//     }, 2000)
// }, 2000)

// Реализация при помощи промисов
console.log('Request...')
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const backendData = {
            server: 'avs',
            port: 2000,
            status: 'working'
        }
        console.log('Prepearing...', backendData)
        resolve(backendData)
    }, 2000)
})

p
    .then(data => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                data.status = 'modified'
                console.log('Data modified...', data)
                resolve(data)
                // reject(data)
            }, 2000)
        })
    })
    .then(data => {
        data.fromPromise = true
        console.log('From promise...', data)
        return data
    })
    .then(data => {
        console.log('From promise... modified', data)
    })
    .catch(err => console.log('Error:', err))
    .finally(() => console.log('Finally...'))



// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Starting async... ', ms)
//             resolve(ms)
//         }, ms)
//     })
// }

// sleep(2000).then((ms) => console.log('After async', ms))
// sleep(1000).then((ms) => console.log('After async', ms))

// Promise.all([sleep(2000), sleep(4000)])
//     .then(() => console.log('All async has stoped...')) 

// Promise.race([sleep(1000), sleep(3000)])
//     .then((ms) => console.log('First race async has stoped...', ms))