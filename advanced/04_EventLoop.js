console.log('Start') // попадает сразу в call stack #1

setTimeout(() => {
    console.log('text');
}, 0); // регистрируется web api, затем, затем когда готова в очередь, потом в call stack #3

console.log('End') // попадает сразу в call stack #2