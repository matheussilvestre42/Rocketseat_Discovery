//criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = 'Olá devs'

//append prepend
const body = document.querySelector('body')

/* body.append(div)//depois

body.prepend(div)//antes */

//adicionando elementos

//insert before

const script = body.querySelector('script')

/* body.insertBefore(div, script) */

const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling)
