let count = 1
let number = []
const ask = () => console.log(`${count}º numero:`)
ask()
count++
process.stdin.on('data', data => {
    number.push(data)
    if(number.length < 2){
        ask()
    } else{
        process.exit()
    }
})

process.on('exit', () =>{
    console.log(`A soma entre ${number[0]} e ${number[1]} = ${Number(number[0]) + Number(number[1])}`)
})