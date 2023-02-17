//declaration ou declaração

var name

//assignment ou atribuição

name = "Matheus"

//agrupamento de declaração

let age, isHuman

age = 22
isHuman = true

//Multiplos argumentos na função
//console.log(name, age, isHuman)

console.log('O '+ name +' tem ' + age + ' anos')
console.log(`O ${name} tem ${age} anos`)

//Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

//Array

const animals = ['Lion', 'Monkey', 'cat', {name: 'Dog', age: 3}]

console.log(animals[3].name)



