//Eventos

function print() {
    console.log("print")
}

const input = document.querySelector('input')

/* input.onkeyup = function(keyup) {
    console.log('baixo')
} */

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

/* h1.onclick = print */

h1.addEventListener('click', function(){
    console.log('outro Momento')
})

//argumento event

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}