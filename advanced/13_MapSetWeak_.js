/* eslint-disable no-unused-vars */

// Map ####################
const obj = {
    name: 'Andrey',
    age: 39,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Andrey'],
    ['age', 39],
    ['job', 'Fullstack']
]

const entriesFromObj = Object.entries(obj)
const objFromEntries = Object.fromEntries(entries)

const map = new Map(entries)

const fieldJob = map.get('job')

map
    .set('salary', 1000)
    .set(obj, 'Value of obj')
    .set(NaN, 'NaN ??')

const isJobInTrue = map.has('job')
const hasDeletedTrue = map.delete('job')
const jobHasDeletedFalse = map.delete('job')
const isJobInFalse = map.has('job')

const fieldObj = map.get(obj)
const mapSizeSix = map.size // 6
//map.clear() 
const mapSizeZero = map.size // 6

for (const entry of map.entries()) { const curEntry = entry }
// ===
for (const entry of map) { const curEntry = entry }

for (const [key, value] of map) {
    const curKey = key,
        curValue = value
}

for (const value of map.values()) { const curValue = value }
for (const key of map.keys()) { const curKey = key }

map.forEach((value, key, mp) => {
    const curKey = key,
        curValue = value
})

const arrFromMap = [...map]
const arrFromMap2 = Array.from(map)

const mapEntries = map.entries()
const objFromMap = Object.fromEntries(map.entries())

const users = [
    { name: 'Elena' },
    { name: 'Alex' },
    { name: 'Irina' }
]
const visits = new Map()


visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

const lastVisit = user => visits.get(user)

const timeOfVisit = lastVisit(users[0])

// Set ####################
const set = new Set([1, 2, 3, 4, 5, 5, 5, 6, 7, 7])
set.add(8).add(8).add(9)
set.has(42)
set.size
set.delete(9)
// set.clear()



console.log()