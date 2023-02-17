/*
    new

    *left-hand-side expression
    *criar um novo objeto

 */

let name = new String('Mayk')
name.surName = 'Brito'
let age = new Number(12)
console.log(name.surName, age)

/*
    Operadores unários
    typeof
    delete
*/
const person = {
    name: "Mayk",
    age: 25
}
delete person.age
console.log(person)

console.log(typeof "mayk")


//Operadores Aritiméticos

//multiplicação
console.log(3.2 * 5.5)

//divisão
console.log(12 / 2)

//Soma
console.log(34 + 67)

//Subtração
console.log(34 - 23)

//resto(remainder) da divisão
console.log(11%10)

//incremento
let increment = 0
increment++
console.log(increment++)
console.log(++increment)

//decremento
let decrement = 0
decrement--
console.log(decrement--)
console.log(--decrement)

//exponencial
console.log(3**2)

//grouping operator ()

let total = (2+3) * 5
console.log(total)

//Operadores de Comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1)//false
console.log(one == '1')//true

//!= diferente
console.log(one != two)//true
console.log(one != 1)//false
console.log(one != "1")//false

//=== estritamente igual a
console.log(one === "1")//false
console.log(one === 1)//true

//!== estritamente diferente de
console.log(two !== "2")//true
console.log(two !== 2)//false

//> Maior que
console.log(one > two)//false

//>= Maior igual a
console.log(one >= 1)//true
console.log(two >= 1)//true

//< Menor que
console.log(one < two)//true

//<= Menor igual a
console.log(one <= two)//true
console.log(one <= 1)//true
console.log(one <= 0)//false

//Operadores de atibuição(Assignment)

let x

console.log(x)

//assignement
x = 1

//addition assignment
x += 2

//subtraction assignment
x -= 1

//multiplication assignment
x*=2

//division assignment
x/=2

//remainder, exponetiation
x%= 2
x**=2

console.log(x)

//Operadores lógicos
//verdadeiro ou falso

let bread = true
let chease = true

//AND &&
console.log(bread && chease)

//OR ||
console.log(bread || chease)

//NOT !
console.log(!bread)
console.log(!chease)

//Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condittion ? value1 : value2

const niceBreakfest = bread && chease ? 'Café Top' : 'Café Ruim'
console.log(niceBreakfest)

age = 16

const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)

//Operador de String (String operator)

//comparison
console.log("a" == "b")

//concatenation
console.log("a" + "b")



/*
    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

*/

console.log(NaN ? 'verdadeiro' : 'false')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log(-Infinity ? 'Verdadeiro' : 'Falso')


/*
    Operador precedence
    Precedêndia de operadores

*grouping                   ()
*negação e incremento       ! ++ --
*multiplicação e divisão    * /
*adição e subtração         + -
*relacional                 < <= > >=
*igualdade                  == != === !==
*AND                        &&
*OR                         ||
*condicional                ?:
*assignment (atribuição)    = += -= *= ...

*/

