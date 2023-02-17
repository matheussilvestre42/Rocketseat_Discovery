const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0])
console.log(pilotos[3])

console.log(pilotos.length)

for( let piloto of pilotos) {
    console.log(piloto)
}

pilotos.push('Alonso')
console.log(pilotos)

//retorna o valor do primeiro elemento que retornar true
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

pilotos.splice(1, 1)


