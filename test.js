// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);


// console.log(map1.get('a'));

// map1.set('a', 97);

// console.log(map1.get('a'));

// console.log(map1.size);

// map1.delete('b' && 'c');

// console.log(map1.size);

// const wrongMap = new Map()
// wrongMap['bla'] = 'blaa'
// wrongMap['bla2'] = 'blaa2'

// wrongMap.has('bla')
// wrongMap.delete('bla')

// console.log(wrongMap);

// const contacts = new Map()
// contacts.set('Jessica', {phone: "231-555-1234", address: "123 N ist Ave"})
// contacts.has('Jessica')

// // contacts.set('Jess')

// contacts.set('Jess')

// console.log(contacts.size)

// get Map[@@species]
// Map.prototype.size
// Map.prototype.clear()
// Map.prototype.delete(key)
// Map.prototype.has(key)
// Map.prototype.get(key)
// Map.prototype.has(key)
// Map.prototype[@@iterator] ()
// Map.prototype.keys()
// Map.prototype.values()
// Map.prototype.entries()
// Map.prototype.forEach(callback[, thisArg])



// const myMap = new Map()

// const keyString = 'a string'
// const keyObj = {}
// const keyFunc = function() {}

// myMap.set(keyString, "value associated with 'a string'")
// myMap.set(keyObj, "value with obj")
// myMap.set(keyFunc, "value associated")

// console.log(myMap.size)

// console.log(myMap.get('a string'))
// console.log(myMap.get({}))
// console.log(myMap.get(keyFunc))

// const myMap = new Map()
// myMap.set(NAN, 'not a number')

// console.log(myMap.get(NAN))

// const otherNAN = Number('foo')
// myMap.get(otherNAN)

// const myMap = new Map()
// myMap.set(0, 'zero')
// myMap.set(1, 'one')

// for (const [key, value] of myMap) {
// console.log(key + " " + value)
// }

// for (const [key, value] of myMap.entries) {
// console.log(key + " " + value)
// }

// myMap.forEach(function(value, key) {
// console.log(key + " " + value)
// })

// const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// myMap = new Map(kvArray)
// console.log(myMap.get('key1'))
// console.log(Array.from(myMap))
// console.log(kvArray)
// console.log([...myMap])
// console.log(Array.from(myMap.keys()))


// const original = new Map([
// [1, 'one']
// ])

// const clone = new Map(original)

// console.log(clone.get(1))
// console.log(original === clone)


const first = new Map([
    [1, 'one'],
    [2, 'two,'],
    [3, 'three'],
    ])
    
    const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
    ])
    
    const merged = new Map ([...first, ...second, [1, 'eins']])
    
    console.log(merged)
    console.log(merged.get(2))
    
    
    // let user = {
    // name: "John",
    // age: 30
    // };
    
    // for (let value of Object.values(user)) {
    // console.log(value)
    // }
    
    // function sumSalaries(salaries) {
    // let sum = 0;
    // for (let salary of Object.values(salaries)) {
    // sum += salary;
    // }
    
    // return sum;
    // }
    
    // let salaries = {
    // "John": 100,
    // "Pete": 300
    // };
    
    // console.log(sumSalaries(salaries))
    
    // function sumSalaries(salaries) {
    // return Object.values(salaries).reduce((a, b) => a + b, 0)
    // }
    
    // function count(user) {
    
    // // return Object.values(user).reduce((a, b) => a + b, 0)
    
    // let sum = 0;
    // for(let use of Object.values(user)) {
    // sum += use
    // }
    // };
    
    // let user = {
    // name: 'John',
    // age: 30
    // };
    
    // console.log(count(user));
    
    // function count(obj) {
    // return Object.keys(obj).length
    // }
    
    // console.log(count);

    