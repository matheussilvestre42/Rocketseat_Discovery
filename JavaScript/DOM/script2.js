//textContent

const element = document.querySelector('input')

/* element.textContent += "Olá Devs"
console.log(element.textContent) */

//innerText

/* element.innerText = "Olá Devs" */

//innerHTML

/* element.innerHTML = "Olá <small>devs</small>"  */

//value

/* console.log(element.value)

element.value = "outro valor" */

//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector("#header")

console.log(headerID)
console.log(headerID.getAttribute('id'))

header.removeAttribute('id')
header.removeAttribute('class')