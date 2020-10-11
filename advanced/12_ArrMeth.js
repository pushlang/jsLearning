const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]

for (let e of arr) {
    console.log(`for of: ${e.a}`);
}

const a = arr.map((e) => {
    return e.a ** 2
})
console.log(a)

const amount = arr
    .filter(e => e.a > 3)
    .map(e => {
        return {
            b: e.a * 2,
            c: e.a * 3
        }
    })
    .reduce((sum, e) => sum + e.b + e.c, 0)

console.log(amount)
console.log()


