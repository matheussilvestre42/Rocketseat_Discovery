/*
    Prototype

    *prototype-based language
    *prototype chain
    *__proto__

*/

"Mayk".__proto__

/*
    Type conversion (typecasting) vs type coersion

    *Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5) //type coersion

console.log(Number('9') + 5) //type conversion

//Manipulando Strings e Números

//Transformar String em Número e Número em String

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let num = 1234
console.log(String(num).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numBer = Math.PI
console.log(numBer.toFixed(2).replace('.', ','))


//MAIUSCULAS e minusculas

let text = "Programar é muito bacana!"
console.log(text.toUpperCase())
console.log(text.toLowerCase())

//Verificar se um texto contém uma palavra especifica

let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))

//texto em array

let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

//criar array com construtor

myArray = new Array('a', 'b', 'c', 'd')
console.log(myArray)

//contar elementos de um array

console.log(['a', function(){return 'alo'}, {type: "array"}].length)

//Transformar uma cadeia de caracteres em elementos de um array

word = "manipulação"
console.log(Array.from(word))


let techs = ["html", "css", "js"]
//adicionar um item no fim do array

techs.push("nodejs")

//adicionar um item no começo do array

techs.unshift("sql")

//Remover do fim

techs.pop()

//remover do começo

techs.shift()

//pegar somente alguns elementos do array

console.log(techs.slice(1, 3))

//remover 1 ou mais items em qualquer posição do array

techs.splice(1, 1)

//encontrar a posição de um elemento no array

techs.unshift("Sql")
techs.push("nodeJS")

console.log(techs.indexOf("js"))

console.log(techs)