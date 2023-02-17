//for

//break para a execução do loop
//continue pula a execução

for(let i = 10; i >= 1; i--){
    if(i%2===0){
        console.log(i)
    }
}

//while

let i = 0
while(i > 10) {
    console.log(i)
    i /= 2
}

//for of

let name = 'mayk'
let names = ['Joao', 'paulo', 'Pedro']

for(let i of name){
    console.log(i)
}
for(let i of names) {
    console.log(i)
}

//for in

let person = {
    name: 'John',
    age: 30,
    weight: 86.6
}

for(let property in person) {
    console.log(`${property}: ${person[property]}`)
}