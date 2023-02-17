let info
console.log('Digite qualquer coisa:')
process.stdin.on('data', data => {
    info = data
    process.exit()
})

process.on('exit', () => {
    console.log(`Tipo Primitivo: ${typeof info}`)
})