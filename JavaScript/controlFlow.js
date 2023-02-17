//controle de fluxo

//If else

const temperature = 38

if(temperature >= 37.5) {
    console.log('Febre Alta')
} else if(temperature < 37.5 && temperature >=37){
    console.log('Febre Moderada')
}
else{
    console.log('Saudável')
}

//switch

function calculate(number1, operator, number2){
    let result

    switch(operator){
        case '+':
            result =number1 + number2
            break
        case '-':
            result = number1-number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            result = "não implementado"
    }

    return result
}

console.log(calculate(4, '-' , 8))


//throw

function sayMyName(name = ' ') {
    if(name === ' '){
        throw "Nome necessário"
    }

    console.log('depois do erro')
}

//try...catch

try{
    sayMyName()
} catch(e) {
    console.log(e)
}

//try > throw > catch

