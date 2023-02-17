console.log('Qual é o seu nome: ')
let name

//É necessário armazenar o dado em algum lugar (variavel, array, object)
process.stdin.on("data", data => {
    name = data.toString().trim()
    process.exit()
})

process.on("exit", () => {
    console.log(`Seja Bem-Vindo(a) ${name}`)
})