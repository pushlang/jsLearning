
function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (const j of iter(5)) {
    console.log(j);
}
