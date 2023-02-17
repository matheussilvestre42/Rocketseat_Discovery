//declaration - declaração da função
//function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistẽncia')
    console.log('Revisão é a mãe do aprendizado')
}

//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

createPhrases()

console.log('fim do programa')


//function expression
//function anonymous

//paramêtros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

//sum(2, 3) //arguments - argumentos
//sum(4, 5)

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)


//function hoisting

sayMyName()

function sayMyName() {
    console.log("Matheus")
}


//arrow function

 const myName = () => {
    console.log('Mayk')
}

myName()


//callback function
//função que está passando como parâmetro outra função

function name(name) {
    console.log('Antes de executar a função callback')
    name()
    console.log('depois de executar em uma callback')
}

name(() => {
    console.log('estou em uma callback')
})

/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword

*/

function People(name) {
    this.name = name
    this.walk = function() {
        return 'andando'
    }
}

const mayk = new People('Matheus')
const joao = new People('João')
console.log(mayk)
console.log(joao)
console.log(mayk.walk(), joao.walk())

let nome = new String('Mayk')
console.log(nome)
